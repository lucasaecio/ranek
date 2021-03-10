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
    getUsuario(context, payload) {
      api.get(`/usuario/${payload}`).then(response => {
        context.commit("UPDATE_USUARIO",  response.data)
        context.commit("UPDATE_LOGIN", true)
      })
    }
  },
  modules: {
  }
})
