import React from 'react'
import Button from '../Button/Button'
import './AboutResturent.css'

const AboutUs = () => {
  return (
    <div>
        <div className="conatiner___">
            <div className="right_side">
                <img src="https://themewagon.github.io/allfood/assets/img/gallery/about2.png" alt="" />
            </div>
            <div className="left_side">
                <p>About Our Restaurant</p>
                <h1>We Provide Good Food For Your Family</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, suscipit.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta, sunt in consectetur natus delectus excepturi similique doloribus minus veritatis cupiditate id nesciunt iure accusamus ipsum quaerat nisi, aliquam ex.
                </p>
                <Button name="Learn More"/>
            </div>
        </div>
    </div>
  )
}

export default AboutUs