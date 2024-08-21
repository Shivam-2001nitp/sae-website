import React from 'react'
import './About.css'
import video_image from '../../assets/video_image.jpg'
import play_icon from '../../assets/play-icon.png'

const About = (props) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={video_image} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>
        {props.setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT SAE</h3>
        <h2>SAEINDIA NIT Patna is committed to fostering excellence in engineering and scientific endeavors, with a focus on ground vehicles, aerospace, refrigerants, and fuel cells. We are proud to be a part of the global SAE network, which has been driving advancements in mobility since 1905.</h2>
        <h3>OUR ACHIEVEMENTS</h3>
        <p>In our journey towards excellence, we have achieved remarkable milestones:</p>
        <p>        <ul>
          <li>Ranked 31st out of 120+ teams in SUPRA SAEINDIA 2023, showcasing exceptional performance.</li>
          <li>Secured an impressive 4th position among all NITs and IITs.</li>
          <li>Achieved 1st rank in Bihar.</li>
          <li>Among the 42 teams to qualify Technical Scrutiny in 2022.</li>
          <li>Ranked 3rd among participated IITs & NITs in 2022.</li>
          <li>Secured 1st rank in Bihar in 2022.</li>
        </ul></p>

      </div>
    </div>
  )
}

export default About
