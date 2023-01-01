import React from 'react'
import CategoryProduct from '../../components/CategorySection/CategoryProduct'
import './Menu.css'

const Menu = () => {
  return (
    <div className='menu__head'>
      <div className="menu__banner">
        <h1>Menu</h1>
       
      </div>
      <div className="menu__secton">
        <CategoryProduct/>
      </div>

    </div>
  )
}

export default Menu