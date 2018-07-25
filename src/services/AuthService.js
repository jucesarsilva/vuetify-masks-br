import store from '../store'

const setToken = (token) => {
    store.commit('setToken', token)
    window.localStorage.setItem('token', token)
}

const getToken = () => {
    return store.state.Auth.token
}

const retriveToken = () => {
    store.state.Auth.token = window.localStorage.getItem('token');
}

const AuthService = {
    setToken,
    getToken,
    retriveToken
}

export default AuthService