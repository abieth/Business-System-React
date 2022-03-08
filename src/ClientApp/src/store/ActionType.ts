﻿enum ActionType {
    // Accounting - Accounts
    REQUEST_ACCOUNTS = 'REQUEST_ACCOUNTS',
    RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS',
    SELECT_ACCOUNT = 'SELECT_ACCOUNT',

    // Accounting - Balance Sheet
    REQUEST_BALANCE_SHEET_REPORT_DATA = 'REQUEST_BALANCE_SHEET_REPORT_DATA',
    RECEIVE_BALANCE_SHEET_REPORT_DATA = 'RECEIVE_BALANCE_SHEET_REPORT_DATA',
    UPDATE_BALANCE_SHEET_REPORT_DATE_RANGE_START = 'UPDATE_BALANCE_SHEET_REPORT_DATE_RANGE_START',
    UPDATE_BALANCE_SHEET_REPORT_DATE_RANGE_END = 'UPDATE_BALANCE_SHEET_REPORT_DATE_RANGE_END',
    RESET_BALANCE_SHEET_REPORT_DATA = 'RESET_BALANCE_SHEET_REPORT_DATA',

    // Time Tracking & Invoicing - Customers
    REQUEST_CUSTOMERS = 'REQUEST_CUSTOMERS',
    RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS',
    REQUEST_CUSTOMER_DETAILS = 'REQUEST_CUSTOMER_DETAILS',
    RECEIVE_CUSTOMER_DETAILS = 'RECEIVE_CUSTOMER_DETAILS',
    RESET_CUSTOMER_DETAILS = 'RESET_CUSTOMER_DETAILS',
    RESET_CUSTOMER_STORE_STATE = 'RESET_CUSTOMER_STORE_STATE',
    RESET_CUSTOMERS_LIST = 'RESET_CUSTOMERS_LIST',

    // Time Tracking & Invoicing - Employees
    REQUEST_EMPLOYEES = 'REQUEST_EMPLOYEES',
    RECEIVE_EMPLOYEES = 'RECEIVE_EMPLOYEES',

    // Common - Data Export/Downloads
    REQUEST_EXPORT_DOWNLOAD = 'REQUEST_EXPORT_DOWNLOAD',
    RECEIVE_EXPORT_DOWNLOAD_ERROR = 'RECEIVE_EXPORT_DOWNLOAD_ERROR',
    RECEIVE_EXPORT_DOWNLOAD_INFO = 'RECEIVE_EXPORT_DOWNLOAD_INFO',
    RESET_EXPORT_STORE = 'RESET_EXPORT_STORE',

    // Accounting - Journal Entry
    REQUEST_JOURNAL_ENTRY = 'REQUEST_JOURNAL_ENTRY',
    RECEIVE_JOURNAL_ENTRY = 'RECEIVE_JOURNAL_ENTRY',
    REQUEST_SAVE_NEW_JOURNAL_ENTRY = 'REQUEST_SAVE_NEW_JOURNAL_ENTRY',
    NEW_JOURNAL_ENTRY_SAVE_COMPLETED = 'NEW_JOURNAL_ENTRY_SAVE_COMPLETED',
    REQUEST_SAVE_UPDATED_JOURNAL_ENTRY = 'REQUEST_SAVE_UPDATED_JOURNAL_ENTRY',
    UPDATED_JOURNAL_ENTRY_SAVE_COMPLETED = 'UPDATED_JOURNAL_ENTRY_SAVE_COMPLETED',
    REQUEST_POST_JOURNAL_ENTRY = 'REQUEST_POST_JOURNAL_ENTRY',
    POST_JOURNAL_ENTRY_COMPLETED = 'POST_JOURNAL_ENTRY_COMPLETED',
    REQUEST_DELETE_JOURNAL_ENTRY = 'REQUEST_DELETE_JOURNAL_ENTRY',
    DELETE_JOURNAL_ENTRY_COMPLETED = 'DELETE_JOURNAL_ENTRY_COMPLETED',
    SAVE_JOURNAL_ENTRY_ERROR = 'SAVE_JOURNAL_ENTRY_ERROR',
    INITIALIZE_NEW_JOURNAL_ENTRY = 'INITIALIZE_NEW_JOURNAL_ENTRY',
    EDIT_JOURNAL_ENTRY = 'EDIT_JOURNAL_ENTRY',
    UPDATE_JOURNAL_ENTRY_ENTRY_DATE = 'UPDATE_JOURNAL_ENTRY_ENTRY_DATE',
    UPDATE_JOURNAL_ENTRY_POST_DATE = 'UPDATE_JOURNAL_ENTRY_POST_DATE',
    UPDATE_JOURNAL_ENTRY_DESCRIPTION = 'UPDATE_JOURNAL_ENTRY_DESCRIPTION',
    UPDATE_JOURNAL_ENTRY_NOTE = 'UPDATE_JOURNAL_ENTRY_NOTE',
    UPDATE_JOURNAL_ENTRY_CHECK_NUMBER = 'UPDATE_JOURNAL_ENTRY_CHECK_NUMBER',
    ADD_JOURNAL_ENTRY_ACCOUNT = 'ADD_JOURNAL_ENTRY_ACCOUNT',
    REMOVE_JOURNAL_ENTRY_ACCOUNT = 'REMOVE_JOURNAL_ENTRY_ACCOUNT',
    UPDATE_JOURNAL_ENTRY_ACCOUNT_AMOUNT = 'UPDATE_JOURNAL_ENTRY_ACCOUNT_AMOUNT',
    RESET_DIRTY_JOURNAL_ENTRY = 'RESET_DIRTY_JOURNAL_ENTRY',
    RESET_JOURNAL_ENTRY_STORE_STATE = 'RESET_JOURNAL_ENTRY_STORE_STATE',

    // Accounting - Ledger
    REQUEST_LEDGER_REPORT_DATA = 'REQUEST_LEDGER_REPORT_DATA',
    RECEIVE_LEDGER_REPORT_DATA = 'RECEIVE_LEDGER_REPORT_DATA',
    UPDATE_LEDGER_REPORT_DATE_RANGE_START = 'UPDATE_LEDGER_REPORT_DATE_RANGE_START',
    UPDATE_LEDGER_REPORT_DATE_RANGE_END = 'UPDATE_LEDGER_REPORT_DATE_RANGE_END',
    RESET_LEDGER_REPORT_DATA = 'RESET_LEDGER_REPORT_DATA',

    // Common - Lookup Values
    REQUEST_LOOKUPS = 'REQUEST_LOOKUPS',
    RECEIVE_LOOKUPS = 'RECEIVE_LOOKUPS',

    // Time Tracking & Invoicing - Products
    REQUEST_PRODUCTS = 'REQUEST_PRODUCTS',
    RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS',

    // Accounting - Profit & Loss
    REQUEST_PROFIT_AND_LOSS_REPORT_DATA = 'REQUEST_PROFIT_AND_LOSS_REPORT_DATA',
    RECEIVE_PROFIT_AND_LOSS_REPORT_DATA = 'RECEIVE_PROFIT_AND_LOSS_REPORT_DATA',
    UPDATE_PROFIT_AND_LOSS_REPORT_DATE_RANGE_START = 'UPDATE_PROFIT_AND_LOSS_REPORT_DATE_RANGE_START',
    UPDATE_PROFIT_AND_LOSS_REPORT_DATE_RANGE_END = 'UPDATE_PROFIT_AND_LOSS_REPORT_DATE_RANGE_END',
    RESET_PROFIT_AND_LOSS_REPORT_DATA = 'RESET_PROFIT_AND_LOSS_REPORT_DATA',

    // Common - System Notifications
    SHOW_ALERT = 'SHOW_ALERT',
    DISMISS_ALERT = 'DISMISS_ALERT',

    // Common - Tenant
    REQUEST_TENANTS = 'REQUEST_TENANTS',
    RECEIVE_TENANTS = 'RECEIVE_TENANTS',
    SELECT_TENANT = 'SELECT_TENANT',

    // Time Tracking - Time Activity
    //     Time Activity Details Report
    REQUEST_TIME_ACTIVITY_DETAILS_REPORT = 'REQUEST_TIME_ACTIVITY_DETAILS_REPORT',
    RECEIVE_TIME_ACTIVITY_DETAILS_REPORT = 'RECEIVE_TIME_ACTIVITY_DETAILS_REPORT',
    UPDATE_TIME_ACTIVITY_DETAILS_REPORT_DATE_RANGE_START = 'UPDATE_TIME_ACTIVITY_DETAILS_REPORT_DATE_RANGE_START',
    UPDATE_TIME_ACTIVITY_DETAILS_REPORT_DATE_RANGE_END = 'UPDATE_TIME_ACTIVITY_DETAILS_REPORT_DATE_RANGE_END',
    UPDATE_TIME_ACTIVITY_DETAILS_REPORT_CUSTOMER_FILTER = 'UPDATE_TIME_ACTIVITY_DETAILS_REPORT_CUSTOMER_FILTER',
    UPDATE_TIME_ACTIVITY_DETAILS_REPORT_EMPLOYEE_FILTER = 'UPDATE_TIME_ACTIVITY_DETAILS_REPORT_EMPLOYEE_FILTER',
    RESET_TIME_ACTIVITY_DETAILS_REPORT_DATA = 'RESET_TIME_ACTIVITY_DETAILS_REPORT_DATA',
    //     CUD on Single Time Activities
    INITIALIZE_NEW_TIME_ACTIVITY = 'INITIALIZE_NEW_TIME_ACTIVITY',
    REQUEST_SAVE_NEW_TIME_ACTIVITY = 'REQUEST_SAVE_NEW_TIME_ACTIVITY',
    NEW_TIME_ACTIVITY_SAVE_COMPLETED = 'NEW_TIME_ACTIVITY_SAVE_COMPLETED',
    SAVE_TIME_ACTIVITY_ERROR = 'SAVE_TIME_ACTIVITY_ERROR',
    REQUEST_SAVE_UPDATED_TIME_ACTIVITY = 'REQUEST_SAVE_UPDATED_TIME_ACTIVITY',
    UPDATED_TIME_ACTIVITY_SAVE_COMPLETED = 'UPDATED_TIME_ACTIVITY_SAVE_COMPLETED',
    REQUEST_DELETE_TIME_ACTIVITY = 'REQUEST_DELETE_TIME_ACTIVITY',
    DELETE_TIME_ACTIVITY_COMPLETED = 'DELETE_TIME_ACTIVITY_COMPLETED',
    DELETE_TIME_ACTIVITY_ERROR = 'DELETE_TIME_ACTIVITY_ERROR',
    SELECT_EXISTING_TIME_ACTIVITY = 'SELECT_EXISTING_TIME_ACTIVITY',
    UPDATE_TIME_ACTIVITY_CUSTOMER = 'UPDATE_TIME_ACTIVITY_CUSTOMER',
    UPDATE_TIME_ACTIVITY_EMPLOYEE = 'UPDATE_TIME_ACTIVITY_EMPLOYEE',
    UPDATE_TIME_ACTIVITY_PRODUCT = 'UPDATE_TIME_ACTIVITY_PRODUCT',
    UPDATE_TIME_ACTIVITY_IS_BILLABLE = 'UPDATE_TIME_ACTIVITY_IS_BILLABLE',
    UPDATE_TIME_ACTIVITY_HOURLY_RATE = 'UPDATE_TIME_ACTIVITY_HOURLY_RATE',
    UPDATE_TIME_ACTIVITY_TIME_ZONE = 'UPDATE_TIME_ACTIVITY_TIME_ZONE',
    UPDATE_TIME_ACTIVITY_DATE = 'UPDATE_TIME_ACTIVITY_DATE',
    UPDATE_TIME_ACTIVITY_START_TIME = 'UPDATE_TIME_ACTIVITY_START_TIME',
    UPDATE_TIME_ACTIVITY_END_TIME = 'UPDATE_TIME_ACTIVITY_END_TIME',
    UPDATE_TIME_ACTIVITY_BREAK_TIME = 'UPDATE_TIME_ACTIVITY_BREAK_TIME',
    UPDATE_TIME_ACTIVITY_DESCRIPTION = 'UPDATE_TIME_ACTIVITY_DESCRIPTION',
    RESET_DIRTY_TIME_ACTIVITY = 'RESET_DIRTY_TIME_ACTIVITY',
    //     Global reset for entire store
    RESET_TIME_ACTIVITY_STORE_STATE = 'RESET_TIME_ACTIVITY_STORE_STATE',

    // Invoicing
    //     Invoice List Page
    REQUEST_INVOICE_LIST = 'REQUEST_INVOICE_LIST',
    RECEIVE_INVOICE_LIST = 'RECEIVE_INVOICE_LIST',
    RESET_INVOICE_LIST = 'RESET_INVOICE_LIST',
    //     CRUD on individual Invoices
    INITIALIZE_NEW_INVOICE = 'INITIALIZE_NEW_INVOICE',
    REQUEST_SAVE_NEW_INVOICE = 'REQUEST_SAVE_NEW_INVOICE',
    NEW_INVOICE_SAVE_COMPLETED = 'NEW_INVOICE_SAVE_COMPLETED',
    SAVE_INVOICE_ERROR = 'SAVE_INVOICE_ERROR',
    REQUEST_SEND_INVOICE = 'REQUEST_SEND_INVOICE',
    SEND_INVOICE_COMPLETED = 'SEND_INVOICE_COMPLETED',
    REQUEST_DELETE_INVOICE = 'REQUEST_DELETE_INVOICE',
    DELETE_INVOICE_COMPLETED = 'DELETE_INVOICE_COMPLETED',
    DELETE_INVOICE_ERROR = 'DELETE_INVOICE_ERROR',
    REQUEST_INVOICE = 'REQUEST_INVOICE',
    RECEIVE_INVOICE = 'RECEIVE_INVOICE',
    REQUEST_INVOICE_TERMS = 'REQUEST_INVOICE_TERMS',
    RECEIVE_INVOICE_TERMS = 'RECEIVE_INVOICE_TERMS',
    REQUEST_UNBILLED_TIME_ACTIVITIES = 'REQUEST_UNBILLED_TIME_ACTIVITIES',
    RECEIVE_UNBILLED_TIME_ACTIVITIES = 'RECEIVE_UNBILLED_TIME_ACTIVITIES',
    UPDATE_INVOICE_CUSTOMER = 'UPDATE_INVOICE_CUSTOMER',
    UPDATE_INVOICE_CUSTOMER_ADDRESS = 'UPDATE_INVOICE_CUSTOMER_ADDRESS',
    UPDATE_INVOICE_CUSTOMER_EMAIL = 'UPDATE_INVOICE_CUSTOMER_EMAIL',
    UPDATE_INVOICE_TERMS = 'UPDATED_INVOICE_TERMS',
    UPDATE_INVOICE_ISSUE_DATE = 'UPDATE_INVOICE_ISSUE_DATE',
    UPDATE_INVOICE_DUE_DATE = 'UPDATE_INVOICE_DUE_DATE',
    UPDATE_INVOICE_MESSAGE = 'UPDATE_INVOICE_MESSAGE',
    UPDATE_UNBILLED_TIME_ACTIVITIES_FILTER_START_DATE = 'UPDATE_UNBILLED_TIME_ACTIVITIES_FILTER_START_DATE',
    UPDATE_UNBILLED_TIME_ACTIVITIES_FILTER_END_DATE = 'UPDATE_UNBILLED_TIME_ACTIVITIES_FILTER_END_DATE',
    ADD_SELECTED_TIME_ACTIVITIES_AS_INVOICE_LINE_ITEMS = 'ADD_SELECTED_TIME_ACTIVITIES_AS_INVOICE_LINE_ITEMS',
    RESET_DIRTY_INVOICE = 'RESET_DIRTY_INVOICE',
    RESET_EXISTING_INVOICE = 'RESET_EXISTING_INVOICE',
    //     Global reset for entire store
    RESET_INVOICE_STORE_STATE = 'RESET_INVOICE_STORE_STATE',

    // Payments
    //     API
    REQUEST_SAVE_NEW_PAYMENT = 'REQUEST_SAVE_NEW_PAYMENT',
    NEW_PAYMENT_SAVE_COMPLETED = 'NEW_PAYMENT_SAVE_COMPLETED',
    SAVE_PAYMENT_ERROR = 'SAVE_PAYMENT_ERROR',
    //     UI Gestures
    INITIALIZE_NEW_PAYMENT = 'INITIALIZE_NEW_PAYMENT',
    UPDATE_PAYMENT_AMOUNT = 'UPDATE_PAYMENT_AMOUNT',
    UPDATE_PAYMENT_ARE_ALL_INVOICES_SELECTED = 'UPDATE_PAYMENT_ARE_ALL_INVOICES_SELECTED',
    UPDATE_PAYMENT_CHECK_NUMBER = 'UPDATE_PAYMENT_CHECK_NUMBER',
    UPDATE_PAYMENT_DATE = 'UPDATE_PAYMENT_DATE',
    UPDATE_PAYMENT_DESCRIPTION = 'UPDATE_PAYMENT_DESCRIPTION',
    UPDATE_PAYMENT_DEPOSIT_ACCOUNT = 'UPDATE_PAYMENT_DEPOSIT_ACCOUNT',
    UPDATE_PAYMENT_INVOICE_AMOUNT = 'UPDATE_PAYMENT_INVOICE_AMOUNT',
    UPDATE_PAYMENT_INVOICE_IS_SELECTED = 'UPDATE_PAYMENT_INVOICE_IS_SELECTED',
    UPDATE_PAYMENT_IS_POSTED = 'UPDATE_PAYMENT_IS_POSTED',
    UPDATE_PAYMENT_METHOD = 'UPDATE_PAYMENT_METHOD',
    UPDATE_PAYMENT_REVENUE_ACCOUNT = 'UPDATE_PAYMENT_REVENUE_ACCOUNT',
    //     Reset
    RESET_PAYMENT_STORE_STATE = 'RESET_PAYMENT_STORE_STATE',
}

export default ActionType;