import React from 'react';
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Splash from './components/Splash'
import Orbit from './components/Orbit'
import Loading from './components/Loading'
import BorderEffect from './components/BorderEffect';

function App() {
  return (
   <>
   <Navbar/>
   <article id='page-main' className='udc'>

      <Routes>
      <Route path='/' element={<Splash/>}/>
      <Route path='/orbit' element={<Orbit/>}/>
      <Route path='/loading' element={<Loading/>}/> 
      <Route path='/border-effect' element={<BorderEffect/>}/>
      </Routes>
   </article>
  
   </>
  );
}

export default App;
