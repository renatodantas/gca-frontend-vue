const DEFAULT_TYPE = 'success'

export default {
  state: {
    // Tipo da mensagem
    // Valores: [ success, alert, error ]
    tipo: DEFAULT_TYPE,

    // Mensagem a ser exibida no alert
    mensagem: '',

    // Controle de exibição do alert
    exibir: false,
  },
  mutations: {
    exibirMensagem(state, { tipo, mensagem }) {
      state.exibir = true
      state.tipo = tipo
      state.mensagem = mensagem
    },
    limparMensagem(state) {
      state.exibir = false
      state.tipo = DEFAULT_TYPE
      state.mensagem = '' 
    }
  },
  actions: {
    mensagemSucesso({ commit }, payload) {
      console.debug('Action [mensagemSucesso]:', payload)
      const mensagem = payload.mensagem || payload
      commit('exibirMensagem', { tipo: 'success', mensagem })
    },
    
    mensagemAlerta({ commit }, payload) {
      console.debug('Action [mensagemAlerta]:', payload)
      const mensagem = payload.mensagem || payload
      commit('exibirMensagem', { tipo: 'warning', mensagem })
    },
    
    mensagemErro({ commit }, payload) {
      console.debug('Action [mensagemErro]:', payload)
      const mensagem = payload.mensagem || payload
      commit('exibirMensagem', { tipo: 'error', mensagem })
    },
  },
}
