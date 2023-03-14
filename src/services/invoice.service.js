import axios from "axios";

const createInvoice = async (invoiceBody) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/invoices`, {
        invoiceBody
    })
}

const getInvoices = async (params) => { /* TODO: Do the connection */
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/invoices?params=${params}`);
    return response;
}

const getInvoice = async (invoiceId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/invoices?invoiceId=${invoiceId}`);
    return response;
}

const updateInvoice = async (invoiceId, invoiceBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/invoices?invoiceId=${invoiceId}`, {
        invoiceBody
    });
    return response;
}

const deleteInvoice = async (invoiceId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/invoices?invoiceId=${invoiceId}`);
}

export {
    createInvoice,
    getInvoices,
    getInvoice,
    updateInvoice,
    deleteInvoice
}