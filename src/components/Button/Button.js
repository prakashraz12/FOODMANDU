import React from 'react'
import './Button.css'
import {motion} from 'framer-motion'

const Button = (props) => {
  return (
    <div>
        <div className="btn___">
            <motion.button whileTap={{scale:1.1}} onClick={props.handleclick}>{props.name}</motion.button>
        </div>
    </div>
  )
}

export default Button