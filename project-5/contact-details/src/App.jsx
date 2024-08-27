import { useState } from 'react'
import './App.css'
import { Header } from './Pages/Header'
import { Main } from './Pages/Main'
import { Contact } from './components/Contact'
import { NotFound } from './components/NotFound'
import { AddContact } from './Pages/AddContact'
import { UpdateContact } from './Pages/UpdateContact'
import { RecoilRoot } from 'recoil'

function App() {
  

  return (
    <div className='mx-auto w-[360px]'>
      <Header/>
      <RecoilRoot>
      <Main/>
      
      </RecoilRoot>
    </div>
  )
}

export default App
