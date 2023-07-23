import React from 'react'
import '../../App.css'
import useMode from '../../Hooks/useMode'

const CustomHook = () => {
  // const [isLightMode, changeMode] = useToggle(true)

  // 객체는 키 값만 지켜주는 원하는 걸 꺼내놓올 수 있다.
  // const { isLightMode, isDarkMode, changeMode } = useMode()
  // const { isLightMode, changeMode } = useMode()

  // 배열로 리턴하면 불필요하게 안 쓰는 것도 가져와야 할 수 있다..
  // const [isLightMode, changeMode] = useMode() // 오류는 없지만 동작은 안한다.. changeMode가..
  // const [isLightMode, isDarkMode, changeMode] = useMode()
  const [isLightMode, _, changeMode] = useMode() // 사용하지 않는 건 _ 로 표현하기도 한다.

  return (
    <>
      <h1
        style={{
          // 함수면 함수를 호출하는 형태로 가지고 와야 한다.
          backgroundColor: isLightMode() ? 'white' : 'black',
          color: isLightMode() ? 'black' : 'white'
        }}
      >
        current mode: {isLightMode() ? 'Light Mode' : 'Dark Mode'}
      </h1>
      <button onClick={changeMode}>change mode</button>
    </>
  )
}

export default CustomHook

// UI
// lightMode, darkMode -> UI change
// button click -> changeMode

// isLightMode, isDarkMode -> value -> 'lightMode' / 'darkMode'
// changeMode -> function ()

// const LIGHT_MODE = 'lightMode'
// const DARK_MODE = 'darkMode'

// 사용하는 입장에서는 바뀐지도 모르게...
