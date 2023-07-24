// interface
// get(): Promise<todo[]>
// create(newTodo): Promise<todo>

export class TodoService {
  #httpClient

  constructor(httpClient) {
    this.#httpClient = httpClient
  }

  get() {
    return this.#httpClient.fetch('todos')
  }

  async create(newTodo) {
    const response = await this.#httpClient.fetch('todos', {
      method: 'POST',
      body: JSON.stringify({ todo: newTodo })
    })
    return response.json()
  }
}
