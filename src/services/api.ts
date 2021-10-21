import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:4000' //colocar a minha url / aqui
})