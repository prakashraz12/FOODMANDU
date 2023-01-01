import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import  {popularMenuFood} from '../../assets/fake-data/products'
import {fastFoodProducts} from '../../assets/fake-data/products'
import {riceMenuProducts} from '../../assets/fake-data/products'
import {dessertProducts} from '../../assets/fake-data/products'
import {pizzaProducts} from '../../assets/fake-data/products'
import {coffeeProducts} from '../../assets/fake-data/products'
import products from '../../assets/fake-data/products'
import './CategoryProduct.css'

const CategoryProduct = () => {
    const [data, setData] = useState([])
   useEffect(()=>{
      setData(popularMenuFood)
   },[])
    return (
        <div><div className="category__">
            <div className="text__">
                <p>Our Offerd Menu</p>
                <h2>Some Trendy And <span>Popular Courses Offerd</span></h2>
            </div>
            <div className="space__bar">
              <Button handleclick={()=> setData(fastFoodProducts)}  name="fast food"></Button>
              <Button handleclick={()=> setData(riceMenuProducts)}  name="Main Course"></Button>
              <Button handleclick={()=> setData(dessertProducts)}  name="Dessert"></Button>
              <Button handleclick={()=> setData(pizzaProducts)}  name="Pizza"></Button>
              <Button handleclick={()=> setData(coffeeProducts)}  name="Coffee"></Button>
            </div>
            <div className="display">
                {
                    data.map((element, index)=>(
                        <div className='hover' key={index}>
                            <img src={element.imgUrl} alt="" />
                            <h2>{element.title}</h2>
                            <p>${element.price}</p>
                            <Button name="Order Now"/>
                        </div>
                    ))
                }
            </div>
        </div></div>
    )
}

export default CategoryProduct