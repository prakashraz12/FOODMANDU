import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo-n.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="footer__">
        <div className="section_1">
          <img src={logo} alt="" />
        </div>
        <div className="section_2">
          <h2>Navigation</h2>
          <ul>
            <li><NavLink to='#'>Home</NavLink></li>
            <li><NavLink to='#'>Events</NavLink></li>
            <li><NavLink to='#'>Testimonials</NavLink></li>
            <li><NavLink to='#'>Menu</NavLink></li>
            <li><NavLink to='#'>Order</NavLink></li>
          </ul>
        </div>
        <div className="section_3">
          <h2>Useful Links</h2>
          <ul>
            <li><NavLink to='#'>Registration</NavLink></li>
            <li><NavLink to='#'>Login</NavLink></li>
            <li><NavLink to='#'>policy</NavLink></li>
            <li><NavLink to='#'>Terms & Condinations</NavLink></li>
          </ul>
        </div>
        <div className="section_4">
          <h2>Social Links</h2>
          <ul>
            <span>
              <i class="ri-facebook-circle-fill"></i>
            </span>
            <span>
              <i class="ri-instagram-fill"></i>
            </span>
            <span><i class="ri-twitter-fill"></i></span>
          </ul>
          <div className="contact">
         <span className="phone"> <i class="ri-phone-fill"></i> +977- 01-123456</span>
         <span className="email">
         <i class="ri-mail-fill"></i> info@foodmandu.com
         </span>
          </div></div>
         
      </div>
    </div>
  )
}

export default Footer