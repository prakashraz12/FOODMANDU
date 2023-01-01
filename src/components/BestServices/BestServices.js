import React from 'react'
import chef from '../../assets/images/chef-hat.png'
import './BestServices.css'
import plate from '../../assets/images/restaurant.png'

function BestServices() {
    const itemLink = [
        {
            img: chef,
            title: 'Best Chef'
        },{
            img: plate,
            title: "Quality Food"
        },{
            img: chef,
            title: 'Perfect Cook'
        }

    ]
  return (
    <div>
        <div className="item__head">
          {
            itemLink.map((item)=>(
                <>
                <div className="card__">
                    <img src={item.img} alt="" />
                    <h2>{item.title}</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, eum!</p>
                </div>
                </>
            ))
          }
        </div>
    </div>
  )
}

export default BestServices