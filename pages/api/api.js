import axios from 'axios'

const api = axios.create({
  baseURL:'https://PTAS-Projeto.ananicoletti.repl.co'
})

export default api;