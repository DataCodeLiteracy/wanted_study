import { createContext, useContext } from 'react'

const AuthContext = createContext({}) // 기본값으로 빈 객체 사용

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children, authService }) => {
  const signin = authService.signin.bind(authService)
  const signup = authService.signup.bind(authService)
  const logout = authService.logout.bind(authService)

  return (
    <AuthContext.Provider value={{ signin, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
