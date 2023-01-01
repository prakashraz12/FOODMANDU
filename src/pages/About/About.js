import React from 'react'
import AboutUs from '../../components/AboutResturent/AboutUs'
import BestServices from '../../components/BestServices/BestServices'
import Button from '../../components/Button/Button'
import Meet from '../../components/Meet/Meet'
import './About.css'

const About = () => {
  return (
    <div>
      <div className="main__container">
        <div className="about__area">
        <h1>ABOUT</h1>
        </div>

      </div>
      <div className="hot__section">
        <AboutUs/>
      </div>
      <div className="hot__section">
        <Meet/>
      </div>
      <div className="best__services">
     <div className="text___area-">
      <p>Servicees We Offer</p>
      <h1>Our Best Services</h1>
     </div>
     <div className="icon__service">
      <BestServices/>
     </div>
      </div>
      <div className="subscrib">
        <form className='sub'>
          <input type="text" placeholder='Enter your email' />
          <Button name="SUBSCRIBE"/>
        </form>
      </div>
    </div>
   
  )
}

export default About