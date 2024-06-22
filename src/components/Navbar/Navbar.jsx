import React from 'react'
import {assets} from '../../assets/frontend_assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={assets.logo} className='logo'></img>
    <ul className='navbar_menu'>
        <li>home</li>
        <li>menu</li>
        <li>mobile app</li>
        <li>contact us</li>
    </ul>
    <div className='navbar_right'>
        <img src={assets.search_icon} alt=''></img>
        <div className='navbar_search_icon'>
            <img src={assets.basket_icon}/>
            <div className='dot'>
            </div>
            <button className='sign_inb_btn'>sign in</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar