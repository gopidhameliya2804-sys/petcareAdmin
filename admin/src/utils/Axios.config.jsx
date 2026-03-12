import axios  from "axios";
import CheckToken from "./CheckToken";
import { LogoutWithoutNotification } from "./Logout";

let api = axios.create({
    baseURL: "http://localhost:8000/api"
});

api.interceptors.request.use((config) => {
    let token = CheckToken();
    config.headers.Authorization = `bearer ${token}`;
    return config;
})

api.interceptors.response.use(
    res => res ,
    err => {
        if (err.response?.status === 401 || err.response?.status === 403) {
            LogoutWithoutNotification();
        }
        return Promise.reject(err);
    }
);

export default api;