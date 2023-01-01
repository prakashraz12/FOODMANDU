import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo-n.png'
import './Header.css'
import { useSelector } from "react-redux";
const Header = () => {
    const item = useSelector((state)=> state.cart)
    const navbarLinks = [
        {
            path: '/',
            display: 'Home'
        },
        {
            path: '/about',
            display: 'About'
        },
        {
            path: 'contact',
            display: 'Contact'
        },
        {
            path: '/menu',
            display: 'Menu'
        }
    ]
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav__links">
                    <ul>
                        {
                            navbarLinks.map((item) => (
                                <li >
                                    <NavLink to={item.path} className={(navClass)=> navClass.isActive ? "active__menu" : ''}>{item.display}</NavLink>
                                    <span className='under_line'></span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="menu__bar_icon">
                    <span className="cart">
                    <i class="ri-shopping-bag-2-line"></i>
                    <span className='badge'>{item.length}</span>
                    </span>
                    <span className='user'>
                    <i class="ri-account-circle-line"></i>
                    </span>
                    <div className="menu">
                    <i class="ri-menu-line"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header