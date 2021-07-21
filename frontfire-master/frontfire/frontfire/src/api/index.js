import request from "./service"

const login = (userName, userPassword) => {
    return request({
        method: 'post',
        url: '/login',
        data: {
            userName,
            userPassword
        }
    })
}

const getList = () => {
    return request({
        method: 'get',
        url: '/admin/getList'
    })
}

const deleteItem = (phoneNumber) => {
    return request({
        method: 'post',
        url:'/admin/delete',
        data: {
            phoneNumber
        }
    })
}

const addItem = (itemInfo) => {
    return request({
        method: 'post',
        url: '/admin',
        data: {
            data: itemInfo
        }
    })
}

const resendMsg = (params) => {
    return request({
        method: 'post',
        url: '/admin/resendMsg',
        data: {
            ...params
        }
    })
}

const sendLocation = (result, number) => {
    return request({
        method: 'post',
        url:'/client',
        data: {
            result,
            number
        }
    })
}

export default {
    login,
    getList,
    deleteItem,
    addItem,
    resendMsg,
    sendLocation
}