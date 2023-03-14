import axios from "axios";
import { getSession } from "../utils/jwt";

const newTask = async (taskBody) => {
    const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/tasks`, taskBody, getSession());
    return data;
}

const getTasks = async () => { /* TODO: Do the connection */
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks`, getSession());
    return data;
}

const getTask = async (taskId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks/${taskId}`, getSession());
    return response;
}

const updateTask = async (taskId, taskBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/tasks/${taskId}`, taskBody, getSession());
    return response;
}

const deleteTask = async (taskId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/tasks/${taskId}`, getSession());
    return response;
}

export {
    newTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}