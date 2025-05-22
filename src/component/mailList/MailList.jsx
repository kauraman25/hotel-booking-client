import React from 'react'
import "./mailList.css";

function MailList() {
  const handleClick = () => {
    alert('Thank you, The form was submitted.');
  }
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <form className="mailInputContainer" action="https://formsubmit.co/kauraman200225@gmail.com" method='POST'>
        <input type="text" name='name' required placeholder="Enter Your Name" />
        <input type="text" name='location' required placeholder="Enter Your Location" />
        <input type="text" name='email' required placeholder="Enter Your Email" />
        <button type='submit' onClick={handleClick}>Subscribe</button>

        </form>
      </div>
    </div>
  )
}

export default MailList