import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }
  
const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const deleteurl = `${baseUrl}/${id}`
    const request = axios.delete(deleteurl)
    return request.then(response => { return response })
}
  
export default { getAll, create, deletePerson }