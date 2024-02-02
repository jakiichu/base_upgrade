import axios from "axios";
import Cookies from 'js-cookie'
import {CookieValues} from "@domain/interfaces/common/enums/cookie";

const defaultURL = import.meta.env.VITE_API_HOST


const API_HTTPS_SERVICES = axios.create({
    baseURL: defaultURL,
    withCredentials: false,
})

API_HTTPS_SERVICES.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = `Bearer ${Cookies.get(
            CookieValues.ACCESS_TOKEN
        )}`
        config.headers['Content-Type'] = 'application/json'

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
export default API_HTTPS_SERVICES