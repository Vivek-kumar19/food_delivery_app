import React from 'react'
import './footer.css'
import { assets } from '../../assets/frontend_assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt={assets.logo} />
                <p>lorClita consetetur labore lorem clita ea eirmod, at amet rebum kasd lorem invidunt, et diam sed sadipscing eos labore dolor.em</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt={assets.facebook_icon} />
                    <img src={assets.twitter_icon} alt={assets.twitter_icon} />
                    <img src={assets.linkedin_icon} alt={assets.linkedin_icon} />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-854-957-8565</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer