// 내가 쓰는 입장에서 어떻게 쓰일지?
// HTTP request
// window fetch
// 1.fetch 쓰듯이 똑같이 쓰게..
// 대신 내가 보내는 요청은
// 2.매 요청마다 Authorization header에 token 넣어주기
// 3.baseURL 설정해주는 것, 자동으로 앞에 넣어주기

class HttpClient {
  // url을 외부에서 조절할 수 있게 한다..?
  baseURL
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  fetch(endpoint, options = {}) {
    window.fetch(this.baseURL + endpoint, {
      ...options,
      headers: {
        Authorization: 'ACCESS_TOKEN',
        ...options.headers
      }
    })
  }
}

const httpClient = new HttpClient('https://jsonplaceholder.typicode.com/')

export { httpClient }
