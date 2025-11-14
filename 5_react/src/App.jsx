import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Progress from './components/Progress'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Progress name="My Progress Bar" />
      <Progress name="my name is harsh" />
      <Progress name="Girish" />
      <Progress name="Meet" />
    </>
  )
}

export default App
