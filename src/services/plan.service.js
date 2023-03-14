import axios from "axios";
import { getSession } from "../utils/jwt";

const createPlan = async (playBody) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/plans`, {
        playBody
    }, getSession())
}

const getPlans = async (params) => { /* TODO: Do the connection */
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/plans`, getSession());
    return response;
}

const getPlan = async (planId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/plans?planId=${planId}`, getSession());
    return response;
}

const updatePlan = async (planId, playBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/plans?planId=${planId}`, {
        playBody
    }, getSession());
    return response;
}

const deletePlan = async (planId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/plans?planId=${planId}`, getSession());
}

export {
    createPlan,
    getPlans,
    getPlan,
    updatePlan,
    deletePlan
}