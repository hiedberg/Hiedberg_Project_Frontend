import axios from "axios";

const createSubscription = async (subscriptionBody) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/subscriptions`, {
        subscriptionBody
    })
}

const getSubscriptions = async (params) => { /* TODO: Do the connection */
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/subscriptions?params=${params}`);
    return response;
}

const getSubscription = async (subId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/subscriptions?subscriptionId=${subId}`);
    return response;
}

const updateSubscription = async (subId, subscriptionBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/subscriptions?subscriptionId=${subId}`, {
        subscriptionBody
    });
    return response;
}

const deleteSubscription = async (subId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/subscriptions?subscriptionId=${subId}`);
}

export {
    createSubscription,
    getSubscriptions,
    getSubscription,
    updateSubscription,
    deleteSubscription
}