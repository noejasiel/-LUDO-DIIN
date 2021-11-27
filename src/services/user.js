import axios from 'axios'
const baseUrl = '/api/users/login'

const login = async credenciales => {
    const res = await axios.post(baseUrl, credenciales)
    return res.data
}

export default {login}