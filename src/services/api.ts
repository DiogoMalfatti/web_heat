import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://nlwheat-node.herokuapp.com/' //colocar a minha url / aqui
})