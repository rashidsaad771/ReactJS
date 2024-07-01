import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-black text-white rounded-xl p-4 mb-4'>Tailwind Test</h1>
      <Card username="ChaiAurCode" btnText="Click me" />
      <Card username="Heitsh" />
    </>
  )
}

export default App
