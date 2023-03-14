import { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit'

// utils
import axios from 'axios'
import { useSelector } from 'react-redux';
//
import { dispatch, store } from '../store';
import { createInvoice, updateInvoice, getInvoice, getInvoices, deleteInvoice } from '../../services/invoice.service';
import { decodeToken } from '../../utils/jwt';

const initialState = {
    isLoading: false,
    error: null,
    invoices: [],
    invoice: null,
    sortBy: null,
    filters: {
        category: 'All',
    },
};

const slice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        // START LOADING
        startLoading(state) {
            state.isLoading = true;
        },

        // HAS ERROR
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        setInvoice(state, action) {
            state.isLoading = false;
            state.task = action.payload;
        },

        // GET TASKS
        getInvoicesSuccess(state, action) {
            state.isLoading = false;
            state.tasks = action.payload;
        },

        // GET TASK
        getInvoiceSuccess(state, action) {
            state.isLoading = false;
            state.task = action.payload;
        },

        // CREATE TASK
        createInvoiceSuccess(state, action) {
            state.isLoading = false;
            state.tasks.push({
                id: action.payload.id,
                title: action.payload.title,
                category: action.payload.category,
                description: action.payload.description,
                priority: action.payload.priority,
                clientId: action.payload.clientId,
                createDate: action.payload.submissionDate,
                dueDate: action.payload.endDate,
                status: action.payload.status || 'pending',
                taskTo: { task: action.payload.title },
                taskNumber: action.payload.id.slice(0, 9)
            });
        },

        // EDIT TASK
        editInvoiceSuccess(state, action) {
            state.isLoading = false;
            state.tasks = action.payload;
        },

        // DELETE TASK
        deleteInvoiceSuccess(state, action) {
            state.isLoading = false;
            state.tasks = action.payload;
        },
    }
})

export default slice.reducer;

export const { sortByStatus, filterTasks, setInvoice } = slice.actions;

export function newInvoiceFunc(invoiceBody) {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            console.log(invoiceBody)
            /* const { data } = await createInvoice(id, taskBody)
            const { invoice } = store.getState()
            const { invoices } = { ...invoice } */

            /* const tasksUpdated = tasks.filter(task => task.id !== data.id) */
            /* tasksUpdated.push({
                id: data.id,
                title: data.title,
                category: data.category,
                description: data.description,
                priority: data.priority,
                clientId: data.clientId,
                createDate: data.submissionDate,
                dueDate: data.endDate,
                status: data.status || 'pending',
                taskTo: { task: data.title },
                taskNumber: data.id.slice(0, 9),
            }) */
        } catch (error) {
            console.log(error);
        }
    }
}