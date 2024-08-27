import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from 'autoprefixer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      <button onClick={()=>{setIsDarkMode((dark)=>!dark)}}></button>
    </h1>
    </>
  )
}

export default App
