import axios from 'axios'

const apiServerProtocol = window.location.protocol
const apiServerHost = process.env.VUE_APP_API_SERVER_HOST || window.location.hostname
const apiServerPort = process.env.VUE_APP_API_SERVER_PORT || window.location.port
const apiUrl = `${apiServerProtocol}//${apiServerHost}:${apiServerPort}`

const instance = axios.create({
  baseURL: `${apiUrl}/api`,
  timeout: 2000,
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Accept': 'application/json'
  // },
})

instance.interceptors.response.use(
  (config) => {
    window.scrollTo(0, 0)
    return config
  },
  (error) => {
    // Por default, corre a tela para o topo da janela
    window.scrollTo(0, 0)
    console.error(error)
    return Promise.reject(error)
  })

export { axios as pureAxios }
export default instance