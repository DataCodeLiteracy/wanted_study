import React, { useState, useCallback, useContext, createContext } from 'react'

const LIGHT = 'light'
const DARK = 'dark'

const ThemeContext = createContext()
const ThemeChangeContext = createContext()

export const useTheme = () => useContext(ThemeContext)
export const useThemeChange = () => useContext(ThemeChangeContext)

const ContextAPI = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT)

  const isDarkMode = useCallback(() => theme === DARK, [theme])
  const isLightMode = useCallback(() => theme === LIGHT, [theme])

  const toggleTheme = useCallback(
    () => setTheme((prevTheme) => (prevTheme === LIGHT ? DARK : LIGHT)),
    [setTheme]
  )

  return (
    <ThemeContext.Provider value={{ isDarkMode, isLightMode }}>
      <ThemeChangeContext.Provider value={toggleTheme}>
        {children}
      </ThemeChangeContext.Provider>
    </ThemeContext.Provider>
  )
}

export const Title = () => {
  const theme = useTheme()

  const style = {
    color: theme?.isDarkMode() ? 'black' : 'white',
    backgroundColor: theme?.isLightMode() ? 'black' : 'white'
  }

  return <h1 style={style}>Hello, World</h1>
}

export const ToggleThemeButton = () => {
  const toggleTheme = useThemeChange()

  return <button onClick={toggleTheme}>change theme</button>
}

export default ContextAPI
