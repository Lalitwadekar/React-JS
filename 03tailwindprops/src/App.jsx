import './App.css'
import Card from './componants/card'

function App() {
let myObj = {
  name: "Anand",
  no: 25,
};

let newArr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-lg mb-4'>Tailwind</h1>
      <div className='flex gap-10'>
        <Card Name='Lalit'/>
        <Card />
      </div>
    </>
  )
}

export default App
