import axios from "axios";

const createUser = async (user) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, {
        user,
    });
}

const getUsers = async (params) => { /* TODO: Do the connection */
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users?params=${params}`);
    return response;
}

const getUser = async (userId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users?userId=${userId}`);
    return response;
}

const updateUser = async (userId, userBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/users?userId=${userId}`, {
        userBody
    });
    return response;
}

const deleteUser = async (userId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users?userId=${userId}`);
}

export {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}