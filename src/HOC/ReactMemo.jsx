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
