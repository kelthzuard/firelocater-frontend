import axios from 'axios'
import router from '../router'

const baseUrl = '//loc.firelocater.top'

const service = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    responseType: "json",
    //withCredentials: true,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

const request_intercep_accpet = (config) => {
    const token = window.localStorage.getItem('token')
    if (token !== undefined) {
        config.headers.Authorization = 'Bearer ' + token
    }
    return config
}

const request_intercep_reject = (error) => {
    return Promise.reject(error)
}

service.interceptors.request.use(request_intercep_accpet, request_intercep_reject)

const response_intercep_accept = (res) => {
    if (res.headers.hasOwnProperty('authorization')) {
        window.localStorage.setItem('token', res.headers['authorization'])
    }
    if (res.status === 200 || res.status === 304) {
        return Promise.resolve(res)
    }
    else {
        return Promise.reject(res)
    }
}

const response_intercep_reject = (err) => {
    if (err.response.status === 401) {
        if (window.localStorage.hasOwnProperty('authorization')) {
            window.localStorage.removeItem('token')
        }
        router.push({
            path: '/'
        })
    }
    else {
        return Promise.reject(res)
    }
}

service.interceptors.response.use(response_intercep_accept, response_intercep_reject)

export default service