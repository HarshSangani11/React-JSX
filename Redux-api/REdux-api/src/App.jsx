import { useState } from 'react'
import './App.css'
import Api from './Api'
import { Provider } from 'react-redux'
import { store } from './Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Api/>
    </Provider>
  )
}

export default App
