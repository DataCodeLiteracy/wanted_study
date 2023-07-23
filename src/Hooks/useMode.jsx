import { useState, useCallback } from 'react'

const useMode = (initialValue = true) => {
  // array로 리턴
  // index
  // 이름은 내 마음대로 바꿀 수 있다.
  // 길이가 정해진 배열
  // Tuple

  // const [mode, setMode] = useState('lightMode')
  const [isLightModeState, setIsLightModeState] = useState(initialValue)

  // const isLightMode = () => mode === LIGHT_MODE
  const isLightMode = useCallback(() => isLightModeState, [isLightModeState])

  // const isDarkMode = () => mode === DARK_MODE
  const isDarkMode = useCallback(() => !isLightModeState, [isLightModeState])

  const changeMode = useCallback(() => {
    // setMode(mode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE)
    setIsLightModeState((prev) => !prev)
  }, [setIsLightModeState])

  // isLightMode -> function
  // isDarkMode -> function
  // changeMode function

  // return {
  //   isLightMode,
  //   isDarkMode,
  //   changeMode
  // }

  return [isLightMode, isDarkMode, changeMode]
}

export default useMode

// return data type?
// {}, []

// array
// index, 순서를 기준으로 구분
// 순서만 지켜주면된다 -> 순서만 지켜주면 나머지는 마음대로 정할 수 있다.

// object
// key
// key, 이름만 지켜주면 나머지는 마음대로 정할 수 있다.

// const useToggle = (defaultValue) => {
//   const [toggle, setToggle] = useState(defaultValue)

//   const changeToggle = () => {
//     setToggle((prev) => !prev)
//   }

//   return [toggle, changeToggle]
// }
