import { createStore } from 'vuex'
import { api } from '@/services.js'

export default createStore({
  strict: true,
  state: {
    isLoggedIn: false,
    user: {
      id: '',
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: ''
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.isLoggedIn = payload
    },
    UPDATE_USUARIO(state, payload) {
      state.user = Object.assign(state.user, payload);
    }
  },
  actions: {
    getUsuario({commit}, payload) {
      return api.get(`/usuario/${payload}`).then(response => {
        commit("UPDATE_USUARIO",  response.data)
        commit("UPDATE_LOGIN", true)
      })
    },
    setUsuario({commit}, payload) {
      commit("UPDATE_USUARIO", {id: payload.email})
      return api.post(`/usuario/`, payload)
    },
    logoutUser({commit}) {
      commit("UPDATE_USUARIO", {
        id: '',
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
      })
      commit("UPDATE_LOGIN", false)
    }
  },
  modules: {
  }
})
