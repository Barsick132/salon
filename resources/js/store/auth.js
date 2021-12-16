import {router} from "../routes/routes"

export default {
    state: () => ({
        error: ''
    }),
    mutations: {
        setError(state, payload) {
            state.error = payload;
        }
    },
    actions: {
        login({commit}, body) {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('api/login', body)
                    .then(response => {
                        console.log(response.data)
                        if (response.data.success) {
                            window.location.href = "/home"
                        } else {
                            commit('setError', response.data.message);
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        },
        register({commit}, body) {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('api/register', body)
                    .then(response => {
                        console.log(response.data)
                        if (response.data.success) {
                            router.push({name: 'login'})
                        } else {
                            commit('setError', response.data.message);
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        },
        logout() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/logout')
                    .then(response => {
                        console.log(response.data)
                        if (response.data.success) {
                            window.location.href = "/"
                        } else {
                            console.log(response)
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        }
    },
    getters: {
        getError(state) {
            return state.error;
        }
    }
}
