import React from 'react'
import './Programs.css'
import car_image from '../../assets/car_image.jpg'
import landing_image from '../../assets/landing_image.jpeg'
import take_off_image from '../../assets/take_off_image.jpg'
import landing from '../../assets/landing.jpg'
import car_logo from '../../assets/car_logo.jpg'
import take_off from '../../assets/take-off.jpg'




const programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={car_image} alt="" />
        <div className="caption">
            <img src={car_logo} alt="" />
            <p>SUPRA_MOTORSPORTS</p>
        </div>
      </div>
      <div className='program'>
        <img src={take_off_image} alt="" />
        <div className="caption">
            <img src={take_off} alt="" />
            <p>ADC---VYOUM</p>
        </div>
      </div>
      <div className='program'>
        <img src={landing_image} alt="" />
        <div className="caption">
            <img src={landing} alt="" />
            <p>ADC---INVICTUS</p>
        </div>
      </div>
    </div>
  )
}

export default programs
