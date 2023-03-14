import axios from "axios";

const createStaff = async (staffBody) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/staffs`, {
        staffBody
    })
}

const getStaffs = async (params) => { /* TODO: Do the connection */
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/staffs?params=${params}`);
    return response;
}

const getStaff = async (staffId) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/staffs?staffId=${staffId}`);
    return response;
}

const updateStaff = async (staffId, staffBody) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/staffs?staffId=${staffId}`, {
        staffBody
    });
    return response;
}

const deleteStaff = async (staffId) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/staffs?staffId=${staffId}`);
}

export {
    createStaff,
    getStaffs,
    getStaff,
    updateStaff,
    deleteStaff
}