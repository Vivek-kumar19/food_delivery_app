import React, { useState } from 'react'
import {assets} from '../../assets/frontend_assets/assets'
import './Navbar.css'

const Navbar = () => {

  const [menu,setMenu] = useState('home');

  return (
    <div className='navbar'>
    <img src={assets.logo} className='logo'></img>
    <ul className='navbar_menu'>
        <li onClick={()=>{setMenu('home')}} className={menu==='home'?'active':''}>home</li>
        <li onClick={()=>{setMenu('menu')}} className={menu==='menu'?'active':''}>menu</li>
        <li onClick={()=>{setMenu('mobile_app')}} className={menu==='mobile_app'?'active':''}>mobile app</li>
        <li onClick={()=>{setMenu('contactus')}} className={menu==='contactus'?'active':''}>contact us</li>
    </ul>
    <div className='navbar_right'>
        <img src={assets.search_icon} alt=''></img>
        <div className='navbar_basket_icon'>
            <img src={assets.basket_icon}/>
            <div className='dot'>
            </div>
        </div>
            <button className='sign_in_btn'>sign in</button>
    </div>
    </div>
  )
}

export default Navbar