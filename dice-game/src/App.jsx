import { useState } from 'react'
import './App.css'
import { BlackButton } from './components/BlackButton'
import { NumberChoice } from './components/NumberChoice'
import { StartPage } from './pages/Startpage'
import { Game } from './pages/Game'

function App() {
  
const [isGameStarted,SetisGameStarted] = useState(false);

const toggle = () => {
    SetisGameStarted((prev) => !prev);
}
  return (
    <div>
      {isGameStarted ?<Game/> : <StartPage toggle={toggle}/>}
     
    </div>
  )
}

export default App
