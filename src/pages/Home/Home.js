import React from 'react'
import Exclusive from '../../components/Exclusive/Exclusive'
import './Home.css'
import { motion } from 'framer-motion'
import Meet from '../../components/Meet/Meet'
import CategoryProduct from '../../components/CategorySection/CategoryProduct'
import Footer from '../../components/Footer/Footer'
import AboutUs from '../../components/AboutResturent/AboutUs'
const Home = () => {
  return (
    <>
      <div className="hero__container">
        <div className="main__hero">
          <div className="text__area">
            <p>Discover Your taste</p>
            <h1>We belive good food <span className='h1__md'>offer great smile</span></h1>
            <h5>Together creeping heaven upon third dominion be upon won't darkness rule land behold it</h5>
          </div>
          <div className="btn">
            <motion.button whileHover={{scale:1.1}} className='order_now'>Order Now </motion.button>
          </div>
        </div>
      </div>
      <div className="ex__">
        <Exclusive />
      </div>
      <div className="about__chef">
        <Meet/>
      </div>
      <div className="filter__product">
        <CategoryProduct/>
      </div>
      <section>
        <AboutUs/>
      </section>
    </>

  )
}

export default Home