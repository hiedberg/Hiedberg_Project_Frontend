import axios from "axios";

const createOffer = async (offerBody) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/offers`, {
        offerBody
    })
}

const getOffers = async (params) => { /* TODO: Do the connection */
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/offers?params=${params}`);
    return response;
}

const getOffer = async (offerId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/offers?offerId=${offerId}`);
    return response;
}

const updateOffer = async (offerId, offerBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/offers?offerId=${offerId}`, {
        offerBody
    });
    return response;
}

const deleteOffer = async (offerId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/offers?offerId=${offerId}`);
}

export {
    createOffer,
    getOffers,
    getOffer,
    updateOffer,
    deleteOffer
}