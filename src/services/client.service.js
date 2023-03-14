import axios from "axios";

const createClient = async (clientBody) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/clients`, {
        clientBody
    })
}

const getClients = async (params) => { /* TODO: Do the connection */
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/clients?params=${params}`);
    return response;
}

const getClient = async (clientId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/clients?clientId=${clientId}`);
    return response;
}

const updateClient = async (clientId, clientBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/clients?clientId=${clientId}`, {
        clientBody
    });
    return response;
}

const deleteClient = async (clientId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/clients?clientId=${clientId}`);
}

export {
    createClient,
    getClients,
    getClient,
    updateClient,
    deleteClient
}