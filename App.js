import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Fronthome from './components/pages/FrontHome/Fronthome';
import Cart from './components/pages/Cart/Cart';
import Order from './components/pages/Placeorder/Order';
import Footer from './components/Footer/Footer';
import Signuppop from './components/Signuppop/Signuppop';
const App=() =>{
  const [showLogin ,setShowLogin] =useState(false)
  return (
    <>
    {showLogin ? <Signuppop setShowLogin={setShowLogin}/> :<></>}
    <div className='app'
    ><Navbar  setShowLogin={setShowLogin}/>
    <Routes >
      <Route path='/' element={<Fronthome/>}/>
     <Route path ='/cart' element={<Cart/>}/>
     <Route path='/order' element={<Order/>}/>
     </Routes>  
    </div>
    <Footer/>
    </>
  )
}
export default App;