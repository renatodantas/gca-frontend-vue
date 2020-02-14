import router from '../router'
import axios from './api'

/**
 * @type {string} path da API desde service
 */
const API = '/agrupamentos'

export async function load(paginationUrl) {
  const url = paginationUrl || API
  console.debug('Obtendo agrupamentos da URL:', url)
  
  return await axios.get(url, { params: { sort: 'id' } })
}

export async function loadById(id) {
  if (Number.parseInt(id) >= 0) {
    const url = `${API}/${id}`
    return await axios.get(url)
  }
  return undefined
}

export async function loadAll() {
  const url = API
  console.debug('Obtendo TODOS os agrupamentos da URL:', url)
  
  const response  = await axios.get(url, {
    params: { sort: 'nome', size: 100 }
  })
  return response.data
}

/**
 * Salva um agrupamento.
 *
 * @export
 * @param {Object} item a ser gravado
 * @param {boolean} isEditando se true, invoca um PUT, caso contrário, invoca um POST
 */
export async function salvar(item, isEditando) {
  console.debug('Salvando agrupamento:', item)

  try {
    if (isEditando) {
      console.debug('Atualizando agrupamento: ', item.id)
      await axios.put(`${API}/${item.id}`, item)
    } else {
      console.debug('Criando novo agrupamento')
      await axios.post(`${API}`, item)
    }

    router.history.push('/agrupamentos')
    return true
  
  } catch (err) {
    console.log(err)
    return false
  }
}

export async function excluir(item) {
  if (confirm(`Confirma a exclusão do item ${item.nome}?`)) {
    try {
      await axios.delete(`${API}/${item.id}`)
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }
}
