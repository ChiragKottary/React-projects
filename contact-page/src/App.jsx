import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div >
       <div className='w-20 ml-20'><img src="images/lgo.png" alt="" srcset="" /></div>
    <div className='w-[900px] ml-[250px] mt-[50px]'>
      <h1 className='font-extrabold text-[40px]'>CONTACT US</h1>
      <p className='font-bold text-gray-500 text-sm'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT ,
         YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
    </div>

    <div className='flex justify-center space-x-4'>
      <div className='content-center'>
        <div className='grid grid-cols-2 mt-[30px] '>
          <button className='bg-black text-white mr-10  rounded-md py-1 px-9'>VIA SUPPORT CHAT</button>
          <button className='bg-black text-white mr-10  rounded-md py-1'>VIA CALL</button>
        </div>
        <button className='border-black border-2 my-3 w-[92%] rounded-md py-1'>VIA EMAIL FORM</button>
        <div className='grid grid-cols-1 m-3 w-[85%] '>
          <p className='font-bold'>Name:</p>
          <input type="text" placeholder='name'className='border-black border-2 my-2 p-1 rounded-md'/>
          <p className='font-bold'>Email:</p>
        <input type="text" placeholder='email' className='border-black border-2 my-2 p-1 rounded-md'/>
          <p className='font-bold'>Text:</p>
        <textarea name="text" id="" cols="30" rows="10" placeholder='text' className='border-black border-2 my-2 rounded-md'></textarea>
        </div>
        
      </div>
      <div><img src="images/3865301.webp" alt="" srcset="" /></div>
    </div>







    </div>
    
  )
}

export default App
