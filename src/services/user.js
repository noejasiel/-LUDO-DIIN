import axios from 'axios'
const baseUrl = '/api/users'

const login = async credenciales => {
    const res = await axios.post(`${baseUrl}/login`, credenciales)
    return res.data
}

const signup = async user => {
    const res = await axios.post(`${baseUrl}/signup`, user)
    return res.data
}

export default {login, signup}