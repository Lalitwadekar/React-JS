import { useState } from 'react'
import './App.css'



function App() {

  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter Value {count}</h2>
      <button className='add_value' onClick={addValue}> Add Value </button>
      <button onClick={removeValue}> Remove Value </button>
    </>
  )
}

export default App
