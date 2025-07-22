import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import CardsContainer from './components/CardsContainer'


function App() {
  const [count, setCount] = useState(0)
  
  
  return (
    <>
    <CardsContainer/>
    </>
  )
}

export default App
