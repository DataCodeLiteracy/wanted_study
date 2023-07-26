import React from 'react'
import ContextAPI, { Title, ToggleThemeButton } from './ContextAPI'

const ContextComponent = () => {
  return (
    <ContextAPI>
      <Title />
      <ToggleThemeButton />
    </ContextAPI>
  )
}

export default ContextComponent
