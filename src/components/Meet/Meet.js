import React from 'react'
import './Meet.css'
import about from '../../assets/images/about.png'
import chef from '../../assets/images/chef-hat.png'
import food from '../../assets/images/restaurant.png'
const Meet = () => {
    return (
        <div>
            <div className="chef__section">
                <div className="right">
                    <p>Discover Your Test</p>
                    <h1>We Provide Good Food For Your Family!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ullam est quam autem nostrum aliquid, repellat numquam repellendus quos voluptates.</p>
                    <div className="icon__section">
                        <span className='chef'>
                            <img src={chef} alt="" />
                            <h2>Good Chef</h2>
                        </span>
                        <span className='food'>
                            <img src={food} alt="" />
                            <h2>Quality Foods</h2>
                        </span>
                    </div>
                </div>
                <div className="left">
                    <img src={about} alt="" />
                    <span className='ring'></span>
                </div>
            </div>
        </div>
    )
}

export default Meet