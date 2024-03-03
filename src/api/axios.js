import axios from 'axios'

const baseURL = 'https://api.github.com'

export const makeRequest = ({
  url, method = 'get', data = {}, header = {}
}) => axios({
  url,
  method,
  baseURL,
  data,
  header
})
