import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../assest/assets';
import {Link} from 'react-router-dom';
import { StoreContext } from '../context/Storecontext';


//here we crete a state to fix the  current page line  display formating and show the active link effect on menu navbar
const Navbar=({setShowLogin})=>
{
  const [menu,setMenu]= useState("MENU");
  const {getTotalCartAmount} =useContext(StoreContext);

  return (
    <div className='Navbar'>
     <Link to='/'> <img src= {assets.logo} alt='' className='logo'/></Link>
       <ul className='Navbar-menu'>
        
       <Link to ='/' onClick={()=>setMenu("HOME")}   className= {menu==="HOME" ? "active" : " "}> HOME </Link>
      <a href=  '#explore-menu'  onClick={()=>setMenu("MENU")}     className= {menu==="MENU" ? "active" : " "}>   MENU </a>
      <a href= '#app-download'  onClick={()=>setMenu("MOBILE APP")}    className= {menu ==="MOBILE APP" ? "active": " "}> MOBILE APP </a>
      <a href= '#footer'  onClick={()=>setMenu("CONTACT-US")}     className= {menu==="CONTACT-US"? "active": " "}> CONTACT-US</a>       
       </ul>
      <div className='Navbar-right'>
        <img src={assets.search_icon} alt=''/>
        
      <div className='Navbar-search_icon'>
       <Link to='/Cart'> <img src={assets.basket_icon} alt='basket'/></Link>
        <div className={getTotalCartAmount()===0? " " : "dot"}></div>
        </div>
        
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
        </div>
      

    
  )
}
export default Navbar;