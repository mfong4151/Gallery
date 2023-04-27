import React from 'react';
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Splash from './components/Splash'
import Orbit from './components/Orbit'

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Splash/>}/>
    <Route path='/orbit' element={<Orbit/>}/>

   </Routes>
  
   </>
  );
}

export default App;
