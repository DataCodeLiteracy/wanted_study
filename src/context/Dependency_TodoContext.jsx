import { createContext, useContext, useState, useEffect } from 'react'

const TodoContext = createContext({})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = ({ children, todoService }) => {
  // todo array
  // createTodo

  const [todos, setTodos] = useState([{ id: 1, todo: '할일 1' }])

  // useEffect(() => {
  //   todoService.get().then((data) => setTodos(data))
  // }, [todoService, setTodos])

  useEffect(() => {
    const fetchData = async () => {
      const data = await todoService.get()
      console.log(data)
      setTodos(data)
    }
    fetchData().then((data) => setTodos(data))
  }, [todoService, setTodos])

  const create = (newTodo) => {
    return todoService.create(newTodo)
  }

  return (
    <TodoContext.Provider value={{ todos, create }}>
      {children}
    </TodoContext.Provider>
  )
}
