import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/Dependency_AuthContext.jsx'
import { Dependency_AuthService } from './service/Dependency_AuthService.js'
import { TokenRepository } from './repository/Dependency_TokenRepository.js'
import { HttpClientDP } from './util/dependency_httpClient.js'
import { TodoProvider } from './context/Dependency_TodoContext.jsx'
import { TodoService } from './service/Dependency_TodoService.js'

const tokenRepository = new TokenRepository()
const httpClient = new HttpClientDP(
  'https://www.pre-onboarding-selection-task.shop/',
  tokenRepository
)
const authService = new Dependency_AuthService(httpClient, tokenRepository)
const todoService = new TodoService(httpClient)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider authService={authService}>
      <TodoProvider todoService={todoService}> */}
    <App />
    {/* </TodoProvider>
    </AuthProvider> */}
  </React.StrictMode>
)
