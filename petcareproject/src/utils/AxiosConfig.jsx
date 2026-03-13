import axios  from "axios";
import CheckToken from "./CheckToken";
import { LogoutWithoutNotification } from "./Logout";

let api = axios.create({
    baseURL: "https://petcarebackend-wzcq.onrender.com/api",
});

api.interceptors.request.use((config) => {
    let token = CheckToken();
    config.headers.Authorization = `bearer ${token}`;
    return config;
})

// api.interceptors.response.use((err) => {
//     console.log(err.response);
    
    
//     if (err.response.status == 401 || err.response.status == 403) {
//         LogoutWithoutNotification();
//     }
//     return err;

// }, (response) => {
//     return response;
// })

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