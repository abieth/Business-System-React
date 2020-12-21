﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DashAccountingSystemV2.Data;
using DashAccountingSystemV2.Extensions;
using DashAccountingSystemV2.Models;

namespace DashAccountingSystemV2.Repositories
{
    public class JournalEntryRepository : IJournalEntryRepository
    {
        private readonly ApplicationDbContext _db = null;

        public JournalEntryRepository(ApplicationDbContext applicationDbContext)
        {
            _db = applicationDbContext;
        }

        public async Task<JournalEntry> CreateJournalEntryAsync(JournalEntry entry)
        {
            if (entry == null)
                throw new ArgumentNullException(nameof(entry), "Journal Entry cannot be null");

            // TODO: Is this check appropriate here?
            //       Is there _ever_ a case when it is okay to have an unbalanced transaction?
            //       Is this the responsibility of a business logic layer?
            if (!entry.IsBalanced)
                throw new ArgumentException(
                    "Journal Entry is not balanced!  It cannot be persisted in this state.",
                    nameof(entry));

            using (var transaction = await _db.Database.BeginTransactionAsync())
            {
                try
                {
                    var tenant = await _db.Tenant.FirstOrDefaultAsync(t => t.Id == entry.TenantId);
                    
                    if (tenant == null)
                        throw new ArgumentException(
                            $"Journal Entry specifies a non-existent Tenant (ID {entry.TenantId}).",
                            nameof(entry));

                    if (entry.EntryId == 0)
                    {
                        entry.EntryId = await GetNextEntryIdAsync(entry.TenantId);
                    }

                    await _db.JournalEntry.AddAsync(entry);
                    await _db.SaveChangesAsync();
                    await transaction.CommitAsync();

                    return await GetDetailedByIdAsync(entry.Id);
                }
                catch (Exception)
                {
                    await transaction.RollbackAsync();
                    throw;
                }
            }

            throw new NotImplementedException();
        }

        public Task<JournalEntry> GetByIdAsync(Guid journalEntryId)
        {
            return _db
                .JournalEntry
                .Where(je => je.Id == journalEntryId)
                .Include(je => je.Tenant)
                .SingleOrDefaultAsync();
        }

        public Task<JournalEntry> GetByTenantAndEntryIdAsync(Guid tenantId, uint entryId)
        {
            return _db
                .JournalEntry
                .Where(je => je.TenantId == tenantId && je.EntryId == entryId)
                .Include(je => je.Tenant)
                .SingleOrDefaultAsync();
        }

        public Task<JournalEntry> GetDetailedByIdAsync(Guid journalEntryId)
        {
            return _db
                .JournalEntry
                .Where(je => je.Id == journalEntryId)
                .Include(je => je.Tenant)
                .Include(je => je.CreatedBy)
                .Include(je => je.UpdatedBy)
                .Include(je => je.PostedBy)
                .Include(je => je.CanceledBy)
                .Include(je => je.Accounts)
                    .ThenInclude(jeAcct => jeAcct.Account)
                .Include(je => je.Accounts)
                    .ThenInclude(jeAcct => jeAcct.AssetType)
                .SingleOrDefaultAsync();
        }

        public Task<JournalEntry> GetDetailedByTenantAndEntryIdAsync(Guid tenantId, uint entryId)
        {
            return _db
                .JournalEntry
                .Where(je =>
                    je.TenantId == tenantId &&
                    je.EntryId == entryId
                )
                .Include(je => je.Tenant)
                .Include(je => je.CreatedBy)
                .Include(je => je.UpdatedBy)
                .Include(je => je.PostedBy)
                .Include(je => je.CanceledBy)
                .Include(je => je.Accounts)
                    .ThenInclude(jeAcct => jeAcct.Account)
                .Include(je => je.Accounts)
                    .ThenInclude(jeAcct => jeAcct.AssetType)
                .SingleOrDefaultAsync();
        }

        public Task<PagedResult<JournalEntry>> GetJournalEntriesAsync(Guid tenantId, DateTime dateRangeStart, DateTime dateRangeEnd, Pagination pagination)
        {
            return _db
                .JournalEntry
                .Where(je =>
                    je.TenantId == tenantId &&
                    je.Status != TransactionStatus.Canceled &&
                    (je.PostDate ?? je.EntryDate) >= dateRangeStart &&
                    (je.PostDate ?? je.EntryDate) <= dateRangeEnd
                )
                .OrderByDescending(je => je.PostDate ?? je.EntryDate) // TODO: Honor other sorting options if needed
                .ThenBy(je => je.EntryId)
                .Include(je => je.CreatedBy)
                .Include(je => je.PostedBy)
                .Include(je => je.Accounts)
                    .ThenInclude(jeAcct => jeAcct.Account)
                .Include(je => je.Accounts)
                    .ThenInclude(jeAcct => jeAcct.AssetType)
                .GetPagedAsync(pagination);
        }

        public async Task<uint> GetNextEntryIdAsync(Guid tenantId)
        {
            var maxCurrentEntryId = await _db
                .JournalEntry
                .Where(je => je.TenantId == tenantId)
                .Select(je => je.EntryId)
                .MaxAsync<uint, uint?>(entryId => entryId) ?? 0;

            return ++maxCurrentEntryId;
        }

        public Task<PagedResult<JournalEntry>> GetPendingJournalEntriesAsync(Guid tenantId, Pagination pagination)
        {
            return _db
                .JournalEntry
                .Where(je =>
                    je.TenantId == tenantId &&
                    je.Status == TransactionStatus.Pending
                )
                .OrderByDescending(je => je.EntryDate) // TODO: Honor other sorting options if needed
                .ThenBy(je => je.EntryId)
                .Include(je => je.CreatedBy)
                .Include(je => je.PostedBy)
                .Include(je => je.Accounts)
                    .ThenInclude(jeAcct => jeAcct.Account)
                .Include(je => je.Accounts)
                    .ThenInclude(jeAcct => jeAcct.AssetType)
                .GetPagedAsync(pagination);
        }

        public async Task<JournalEntry> PostJournalEntryAsync(Guid journalEntryId, DateTime postDate, Guid postedByUserId, string note = null)
        {
            var entry = await GetDetailedByIdAsync(journalEntryId);

            if (entry == null)
                return null;

            entry.PostDate = postDate;
            entry.PostedById = postedByUserId;
            entry.Status = TransactionStatus.Posted;
            entry.Updated = DateTime.UtcNow;
            entry.UpdatedById = postedByUserId;

            if (!string.IsNullOrWhiteSpace(note) && !string.Equals(note, entry.Note))
            {
                entry.Note = note;
            }

            await _db.SaveChangesAsync();

            return await GetDetailedByIdAsync(journalEntryId);
        }
    }
}
