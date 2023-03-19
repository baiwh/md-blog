import axios from 'axios';

class http {
  constructor() {
  }

  baseParams = {
    method: 'GET',
    timeout: 10000,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  getRequest(url = '/', params) {
    const requestUrl = '/api' + url
    return new Promise((resolve, reject) => {
      axios.get(requestUrl, { ...this.baseParams, ...params })
        .then((response) => {
          const { data, status, statusText } = response
          if (status === 200 && data) {
            return resolve(data)
          } else {
            console.log(`err ${status}:`, data, statusText)
            return reject('error: data不存在')
          }
        })
        .catch((error) => {
          const { status, statusText } = error
          console.log(`request err ${status}:`, statusText)
          return reject('request error: 请求出错')
        })
    })
  }
}

export default new http()