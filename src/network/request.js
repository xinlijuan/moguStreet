import axios from 'axios'

export function request(config) {
  const axios1 = axios.create({
    timeout: 5000
  })
  axios1.interceptors.response.use(
    res => {
      return res.data
    }
  )
  return axios1(config)
}