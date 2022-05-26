import axios from 'axios'

const api = axios.create({
  baseURL:'https://skeleton-nodejs-express-ejs.ananicoletti.repl.co'
})

export default api;