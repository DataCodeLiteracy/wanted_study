// AuthServiceInterface

// signin(email, password): void
// signup(email, password): void
// logout(): void

export class Dependency_AuthService {
  #httpClient
  #tokenRepository
  constructor(httpClient, tokenRepository) {
    this.#httpClient = httpClient
    this.#tokenRepository = tokenRepository
  }
  signin(email, password) {
    this.#httpClient
      .fetch('auth/signin', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      })
      .then((res) => res.text()) // 텍스트로 응답 가져오기
      .then((data) => JSON.parse(data)) // JSON으로 변환
      .then((token) => this.#tokenRepository.save(token))
  }

  signup(email, password) {
    this.#httpClient
      .fetch('auth/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      })
      .then((res) => res.text()) // 텍스트로 응답 가져오기
      .then((data) => JSON.parse(data)) // JSON으로 변환
      .then((token) => this.#tokenRepository.save(token))
  }

  logout() {
    this.#tokenRepository.remove()
  }
}
