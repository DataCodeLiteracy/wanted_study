// httpClient Interface
// fetch(endpoint, options): Promise<Any>
// Authorization

export class HttpClientDP {
  #baseURL
  #tokenRepository

  constructor(baseURL, tokenRepository) {
    this.#baseURL = baseURL
    this.#tokenRepository = tokenRepository
  }

  fetch(endpoint, options = {}) {
    window.fetch(this.#baseURL + endpoint, {
      ...options,
      headers: {
        // token get
        Authorization: this.#tokenRepository.get(),
        ...options.headers
      }
    })
  }
}
