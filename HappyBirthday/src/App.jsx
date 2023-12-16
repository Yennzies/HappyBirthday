import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LizaChan from '../Components/LizaChan';
import OOEEOO from '../Components/OOEEOO';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LizaChan/>}/>
      <Route path='/OOEEOO' element={<OOEEOO/>}/>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
