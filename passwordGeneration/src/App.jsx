import { useCallback, useEffect, useRef, useState } from 'react'
import { FaCopy } from "react-icons/fa";
import './App.css'

function App() {
  const [length , setLength] =useState(8);
  const [password, setPassword] = useState("");
  const [upperCase,setUpperCase] = useState(false);
  const [number,setNumbers] = useState(false);
  const [symbols,setSymbols] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const textRef = useRef(null)


  const generatePassword = useCallback(()=>{
    let len = "abcdefghijklmnopqrstuvwxyz"
    let pass = ""

    if (upperCase) {
      len+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (number) {
      len+="0123456789"
    }
    if (symbols) {
      len+="!#$%&"
    }
    

    for(let i =0 ; i<length;i++)
    {
      const char = Math.floor(Math.random() * len.length +1)
      pass += len.charAt(char);
    }
    setPassword(pass);
  },[length,upperCase,number,symbols])


  useEffect(()=>{
    generatePassword();
  },[length,upperCase,number,symbols])

  const copyContent = ()=>{
    window.navigator.clipboard.writeText(password).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
    });
    
  }

  return (
    <div>
    <div className=' flex justify-center py-3'>
      <div className='bg-gray-700 p-20 rounded-lg'>
      {showPopup && <div className="absolute bg-black text-white p-2 rounded top-12 left-1/2 transform -translate-x-1/2 opacity-90">Text Copied!</div>}
      <div className='flex space-x-2 my-3 mt-10'>
        <input ref={textRef} className='p-1 rounded-lg' type="text" value={password} readOnly/>
        <div className='text-xl cursor-pointer' onClick={copyContent}><FaCopy /></div>
        
      </div>
      <div>
        <div><input type="range" name="" id="" min={6} max={20} defaultValue={length} onChange={(e)=> setLength(e.target.value)}/><p>{length}</p></div>
        <div><input type="checkbox" name="" id="" defaultChecked={upperCase} onChange={()=> setUpperCase((prev)=>!prev)}/>UpperCase</div>
        <div><input type="checkbox" name="" id="" defaultChecked={number} onChange={()=> setNumbers((prev)=>!prev)}/>Numbers</div>
        <div><input type="checkbox" name="" id="" defaultChecked={symbols} onChange={()=> setSymbols((prev)=>!prev)}/>Symbols</div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default App
