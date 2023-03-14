import axios from "axios";

const createSupportTicket = async (supportTicketBody) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/supports`, {
        supportTicketBody
    })
}

const getSupportTickets = async (params) => { /* TODO: Do the connection */
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/supports?params=${params}`);
    return response;
}

const getSupportTicket = async (supportId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/supports?supportTicketId=${supportId}`);
    return response;
}

const updateSupportTicket = async (supportId, supportTicketBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/supports?supportTicketId=${supportId}`, {
        supportTicketBody
    });
    return response;
}

const deleteSupportTicket = async (supportId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/supports?supportTicketId=${supportId}`);
}

export {
    createSupportTicket,
    getSupportTickets,
    getSupportTicket,
    updateSupportTicket,
    deleteSupportTicket
}