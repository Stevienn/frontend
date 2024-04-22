import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';


export const Navbar = () => {

  const [menu,setMenu] = useState("home"); //shop is default
  
  return (
    <header className='navbar'>
        <div className='logo'>
            <img src={logo} alt="" id='logo'/>
            <h1>VG STORE</h1>
        </div>
        <ul className='navigation'>
            <li onClick={()=>{setMenu('home')}}><Link style={{ textDecoration: 'none' }}to='/'><a>Home</a></Link>{menu==='home'?<hr />:<></>}</li>
            <li onClick={()=>{setMenu('mouse')}}><Link style={{ textDecoration: 'none' }}to='/mouse'>Mouse</Link>{menu==='mouse'?<hr />:<></>}</li>
            <li onClick={()=>{setMenu('keyboard')}}><Link style={{ textDecoration: 'none' }}to='/keyboard'>Keyboard</Link>{menu==='keyboard'?<hr />:<></>}</li>
            <li onClick={()=>{setMenu('headset')}}><Link style={{ textDecoration: 'none' }}to='/headset'>Headset</Link>{menu==='headset'?<hr />:<></>}</li>
        </ul>
        <div className='account-card'>
            <Link to='/login'><button>LOGIN</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" id='cart-icon'/></Link>
            <div className='cart-count'>0</div>
        </div>
    </header>
  )
}
