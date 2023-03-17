import axios from "axios";

const staticUrl = 'http://localhost:5000'
const headers = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
}

const authRegister = async (email, password, username) => {
    const response = await axios.post(`${staticUrl}/v1/auth/register`, {
        email,
        password,
        username,
    }, { headers });
    const { tokens, user } = response.data;
    window.localStorage.setItem('accessToken', tokens.access.token);
    window.localStorage.setItem('refreshToken', tokens.refresh.token);

    return { user }
}

const authLogin = async (email, password) => {
    const response = await axios.post(`${staticUrl}/v1/auth/login`, {
        email,
        password,
    }, { headers });
    const { tokens, user } = response.data;
    const accessToken = tokens.access.token;
    window.localStorage.setItem('refreshToken', tokens.refresh.token);

    return { user, accessToken }
}

const authLogout = async (refreshToken) => {
    const response = await axios.post(`${staticUrl}/v1/auth/logout`, {
        refreshToken
    }, { headers });
}

const authRefreshTokens = async (refreshToken) => {
    const response = await axios.post(`${staticUrl}/v1/auth/refresh-tokens`, {
        refreshToken
    }, { headers })
}

const authForgotPassword = async (email) => {
    const response = await axios.post(`${staticUrl}/v1/auth/forgot-password`, {
        email
    }, { headers })
}

const authResetPassword = async (token, password) => {
    const response = await axios.post(`${staticUrl}/v1/auth/reset-password?token=${token}`, {
        password
    }, { headers })
}

const authSendVerificationEmail = async (user) => {
    const response = await axios.post(`${staticUrl}/v1/auth/send-verification-email`, {
        user
    }, { headers });
}

const authVerifyEmail = async (token) => {
    const response = await axios.post(`${staticUrl}/v1/auth/verify-email/${token}`, { headers });
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