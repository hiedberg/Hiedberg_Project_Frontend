import axios from "axios";

const authRegister = async (email, password, username) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`, {
        email,
        password,
        username,
    });
    const { tokens, user } = response.data;
    window.localStorage.setItem('accessToken', tokens.access.token);
    window.localStorage.setItem('refreshToken', tokens.refresh.token);

    return { user }
}

const authLogin = async (email, password) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
        email,
        password,
    });
    const { tokens, user } = response.data;
    const accessToken = tokens.access.token;
    window.localStorage.setItem('refreshToken', tokens.refresh.token);

    return {user, accessToken}
}

const authLogout = async (refreshToken) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, {
        refreshToken
    });
}

const authRefreshTokens = async (refreshToken) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/refresh-tokens`, {
        refreshToken
    })
}

const authForgotPassword = async (email) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/forgot-password`, {
        email
    })
}

const authResetPassword = async (token, password) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/reset-password?token=${token}`, {
        password
    })
}

const authSendVerificationEmail = async (user) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/send-verification-email`, {
        user
    });
}

const authVerifyEmail = async (token) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/verify-email/${token}`);
}

export {
    authRegister,
    authLogin,
    authLogout,
    authRefreshTokens,
    authForgotPassword,
    authResetPassword,
    authSendVerificationEmail,
    authVerifyEmail,
}