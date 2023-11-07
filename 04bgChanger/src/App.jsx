import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('yellowgreen')

  return (
    <div className='w-screen h-screen flex justify-center'
    style={{backgroundColor: color, height:"100vh"}}>
      <div className='fixed flex flex-wrap justify-center bottom-12'>
        <div className='flex flex-wrap justify-center gap-3 bg-beige px-3 py-2 rounded-full'>

          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor: "red"}}>Red</button>

          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor: "green"}}>Green</button>


          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor: "blue"}}>Blue</button>


          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor: "yellow"}}>Yellow</button>

          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor: "orange"}}>Orange</button>

          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor: "Black"}}>Black</button>

          <button onClick={() => setColor("olive")} className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor: "olive"}}>Olive</button>

          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor: "pink"}}>Pink</button>
          
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor: "purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
