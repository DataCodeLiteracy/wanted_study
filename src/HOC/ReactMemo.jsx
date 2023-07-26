import React, { useState } from 'react'
import '../App.css'

const ReactMemo = () => {
  const [text, setText] = useState('')
  const [_, setState] = useState(1)

  const reRender = () => setState((prev) => prev + 1)

  return (
    <div className="App">
      <h1>Memoization Test</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        style={{ display: 'block', margin: '20px auto' }}
        onClick={reRender}
      >
        re render
      </button>
      <ChildComponent name="memo X" value={text} />
      <MemoizedComponent name="memo O" value={text} />
      {/* 잘못된 예시 - React.memo로 감싼 컴포넌트여도 props로 전달하는 부분에서 변경사항이 발생하면 리렌더링이 일어남.. */}
      {/* <MemoizedComponent name="memo O" value={text} reRender={reRender} /> */}
      <ReturnFalseMemo name="return false" value={text} />
      <ReturnTrueMemo name="return true" value={text} />
    </div>
  )
}

function ChildComponent({ name, value }) {
  console.log(`${name} rendered`)

  return (
    <h3>
      {name}: {value}
    </h3>
  )
}

const MemoizedComponent = React.memo(ChildComponent)

const ReturnFalseMemo = React.memo(ChildComponent, () => false)
const ReturnTrueMemo = React.memo(ChildComponent, () => true)

export default ReactMemo
