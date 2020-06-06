import axios from 'axios'

const api = axios.create({
    baseURL:'htts://localhost:3333'
})

export default api