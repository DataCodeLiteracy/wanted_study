import React, { useState } from 'react'
import { useAuth } from '../../../context/Dependency_AuthContext'

const Dependency_Auth = () => {
  const [useInputs, setUserInputs] = useState({
    email: '',
    password: ''
  })
  const { email, password } = useInputs

  const saveUserInputs = ({ target }) => {
    const { name, value } = target
    setUserInputs((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const { signin, signup, logout } = useAuth()

  const handleSignup = () => {
    signup(email, password)
  }
  const handleSignin = () => {
    signin(email, password)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="email">
          email
          <input
            id="email"
            type="text"
            value={email}
            name="email"
            onChange={saveUserInputs}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          password
          <input
            id="password"
            type="text"
            value={password}
            name="password"
            onChange={saveUserInputs}
          />
        </label>
      </div>
      <button onClick={handleSignin}>signin</button>
      <button onClick={handleSignup}>signup</button>
      <button onClick={logout}>logout</button>
    </form>
  )
}

export default Dependency_Auth
