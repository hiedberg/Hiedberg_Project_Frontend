import axios from "axios";

const createBilling = async (billingBody) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/billings`, {
        billingBody
    })
}

const getBillings = async (params) => { /* TODO: Do the connection */
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/billings?params=${params}`);
    return response;
}

const getBilling = async (billingId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/billings?billingId=${billingId}`);
    return response;
}

const updateBilling = async (billingId, billingBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/billings?billingId=${billingId}`, {
        billingBody
    });
    return response;
}

const deleteBilling = async (billingId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/billings?billingId=${billingId}`);
}

export {
    createBilling,
    getBillings,
    getBilling,
    updateBilling,
    deleteBilling
}