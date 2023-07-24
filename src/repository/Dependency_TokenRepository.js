// TokenRepository Interface

// save(token): void
// get(): string
// remove(): void

export class TokenRepository {
  #TOKEN_KEY = 'AT'
  save(token) {
    localStorage.setItem(this.#TOKEN_KEY, token)
  }
  get() {
    return localStorage.getItem(this.#TOKEN_KEY)
  }
  remove() {
    localStorage.removeItem(this.#TOKEN_KEY)
  }
}
