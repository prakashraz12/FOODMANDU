import React from 'react'
import pizza1 from '../../assets/images/pizza1.png'
import burgur1 from '../../assets/images/burger1.png'
import chicken1 from '../../assets/images/chicken1.png'
import './ProductCard.css'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'

const ProductCard = () => {
    const dispatch = useDispatch()
    const handleInput = (pro) =>{
dispatch(add(pro))
    }
    const data = [
        {
            name: "Oven baked pizza",
            img: pizza1
        },
        {
            name: "Ham burgur",
            img: burgur1
        },
        {
            name: "Chicken platter",
            img: chicken1
        },

    ]
    return (
        <div>
            <div className="product__card">
                {
                    data.map((item) => (
                        <motion.div whileHover={{scale:1.1}} className="container__">
                            <div className="image__area">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="name__area">
                             <h1>{item.name}</h1>
                            <button onClick={()=> handleInput(data)} className='add_'>Order Now</button>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductCard