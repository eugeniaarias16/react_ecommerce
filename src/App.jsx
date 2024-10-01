import { useState } from 'react'
import { MainLayOut } from './components/LayOut/MainLayOut'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayOut/>
    </>
  )
}

export default App
