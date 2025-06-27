import axios from "axios";


const api = axios.create({
    baseURL:"https://petstore.swagger.io"
})

export default api;