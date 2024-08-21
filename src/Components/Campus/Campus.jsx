import React from 'react'
import gallary_1 from '../../assets/gallery-1.png'
import gallary_2 from '../../assets/gallery-2.png'
import gallary_3 from '../../assets/gallery-3.png'
import gallary_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import './Campus.css'
const Campus = () => {
  return (
    <div className="campus">
<div className='gallery'>
      <img src={gallary_1} alt="" />
      <img src={gallary_1} alt="" />
      <img src={gallary_1} alt="" />
      <img src={gallary_1} alt="" />
    </div>
    <div className='gallery'>
      <img src={gallary_1} alt="" />
      <img src={gallary_1} alt="" />
      <img src={gallary_1} alt="" />
      <img src={gallary_1} alt="" />
    </div>
    <div className="btn dark-btn" >see more here <img src={white_arrow} alt="" /></div>
    </div>
  )
}

export default Campus
