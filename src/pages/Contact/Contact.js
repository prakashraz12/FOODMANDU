import React from 'react'
import Button from '../../components/Button/Button'
import './Contact.css'
const Contact = () => {
  return (
    <div className='main___'>
      <div className="google__map">
      <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
      <div className="contact__main">
       
        <div className="right__">
<form action="">
  <textarea name="" placeholder='Type Your  Message' id="" cols="30" rows="10"></textarea>
  <input type="text" placeholder='Enter Your Name' />
  <input type="email" placeholder='Enter Your Email' />
  <input type="text" placeholder='Enter Your phonr' />
  <Button name="SUBMIT"/>
  
  

</form>
        </div>
        <div className="left__">
<span><i class="ri-home-2-line"></i> kathmandu, Nepal</span>
<span><i class="ri-smartphone-line"></i> 977- 0123456</span>
<span><i class="ri-mail-line"></i> info@foodmanfu.com</span>
        </div>
      </div>
    </div>
  )
}

export default Contact