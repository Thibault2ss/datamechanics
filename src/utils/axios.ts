import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.SERVER_HOST}/api`
})

export default instance
