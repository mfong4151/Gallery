import React from 'react';
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Splash from './components/Splash'
import Orbit from './components/Orbit'
import Loading from './components/Loading'

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Splash/>}/>
    <Route path='/orbit' element={<Orbit/>}/>
    <Route path='/loading' element={<Loading/>}/> 
   </Routes>
  
   </>
  );
}

export default App;
