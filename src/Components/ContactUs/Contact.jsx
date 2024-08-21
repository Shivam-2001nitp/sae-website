import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "921c511e-3205-40cc-985a-cc7eff448bbc");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us A message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus non natus architecto qui sequi voluptatum eius quod et quasi impedit maiores tempora dicta officiis laudantium, porro, sed culpa exercitationem eos.</p>
        <ul>
            <li><img src={mail_icon} alt="" />shivam@gmail.com</li>
            <li><img src={phone_icon} alt="" />9625895364</li>
            <li><img src={location_icon} alt="" />National Institute of tech patna</li>

        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' />
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
