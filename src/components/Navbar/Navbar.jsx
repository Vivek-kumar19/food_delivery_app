import React, { useContext, useState } from 'react'
import {assets} from '../../assets/frontend_assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const {getTotalCartAmount} = useContext(StoreContext);

  const [menu,setMenu] = useState('home');

  return (
    <div className='navbar'>
    <Link to={'/'} ><img src={assets.logo} className='logo' /></Link>
    <ul className='navbar-menu'>
        <Link to='/' onClick={()=>{setMenu('home')}} className={menu==='home'?'active':''}>home</Link>
        <a href='#explore-menu' onClick={()=>{setMenu('menu')}} className={menu==='menu'?'active':''}>menu</a>
        <a href='#app-download' onClick={()=>{setMenu('mobile_app')}} className={menu==='mobile_app'?'active':''}>mobile app</a>
        <a href='#footer' onClick={()=>{setMenu('contactus')}} className={menu==='contactus'?'active':''}>contact us</a>
    </ul>
    <div className='navbar_right'>
        <img src={assets.search_icon} alt=''></img>
        <div className='navbar_basket_icon'>
            <Link to='/cart'><img src={assets.basket_icon}/></Link>
            {getTotalCartAmount()>0?<div className='dot'></div>:<></>}
        </div>
            <button className='sign_in_btn' onClick={()=>setShowLogin(true)} >sign in</button>
    </div>
    </div>
  )
}

export default Navbar