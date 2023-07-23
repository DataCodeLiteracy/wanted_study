// 내가 쓰는 입장에서 어떻게 쓰일지?
// HTTP request
// window fetch
// 1.fetch 쓰듯이 똑같이 쓰게..
// 대신 내가 보내는 요청은
// 2.매 요청마다 Authorization header에 token 넣어주기
// 3.baseURL 설정해주는 것, 자동으로 앞에 넣어주기

class HttpClient {
  fetch(endpoint, options) {
    window.fetch('https://jsonplaceholder.typicode.com/' + endpoint, {
      headers: {
        Authorization: 'ACCESS_TOKEN'
      }
    })
  }
}

const httpClient = new HttpClient()

export { httpClient }
