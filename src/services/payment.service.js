import axios from "axios";

const createPaymentMethod = async (paymentBody) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/payments`, {
        paymentBody
    })
}

const getPaymentMethods = async (params) => { /* TODO: Do the connection */
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/payments?params=${params}`);
    return response;
}

const getPaymentMethod = async (paymentId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/payments?paymentMethodId=${paymentId}`);
    return response;
}

const updatePaymentMethod = async (paymentId, paymentBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/payments?paymentMethodId=${paymentId}`, {
        paymentBody
    });
    return response;
}

const deletePaymentMethod = async (paymentId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/payments?paymentMethodId=${paymentId}`);
}

export {
    createPaymentMethod,
    getPaymentMethods,
    getPaymentMethod,
    updatePaymentMethod,
    deletePaymentMethod
}