import React, { useState, useEffect } from 'react'
import '../../App.css'

const UseEffectStudy = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log('interval exec')
      console.log('count: ', count)
      setCount(count + 1)
    }, 1000)

    return () => clearInterval(intervalID)
  }, []) // 의존성 배열에 count를 전달하지 않았기 때문에 원하는 결과가 나타나지 않는다.

  return (
    <div>
      <h1>count:{count}</h1>
    </div>
  )
}

export default UseEffectStudy
