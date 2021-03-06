import axios from 'axios'

const baseUrl = '/api/persons' // Vaihda muotoon 'http://localhost:3001/persons', mikäli json-server (Tehtävä 2)

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
