import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Uncontrol from './Components/Uncontrol'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Uncontrol/>
    </>
  )
}

export default App
