import React from 'react'
import ProductCard from '../productCard/ProductCard'
import './Exclusive.css'

const Exclusive = () => {
    return (
        <div>
            <div className="exclusive__section">
                <div className="text__">
                    <p>Popular Dishes

                    </p>
                    <h1>Our Exclusive Items</h1>
                </div>
                <div className="hero__">
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default Exclusive