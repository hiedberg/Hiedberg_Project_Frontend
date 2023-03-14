import axios from "axios";

const createFaq = async (faqBody) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/faqs`, {
        faqBody
    })
}

const getFaqs = async (params) => { /* TODO: Do the connection */
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/faqs?params=${params}`);
    return response;
}

const getFaq = async (faqId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/faqs?faqId=${faqId}`);
    return response;
}

const updateFaq = async (faqId, faqBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/faqs?faqId=${faqId}`, {
        faqBody
    });
    return response;
}

const deleteFaq = async (faqId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/faqs?faqId=${faqId}`);
}

export {
    createFaq,
    getFaqs,
    getFaq,
    updateFaq,
    deleteFaq
}