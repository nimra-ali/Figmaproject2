import React from 'react'
import './Navbar.css'
import Ellipse from './Ellipse'
import pic from './Images/LOGO (1).png'
import Text from './Text'

function Navbar() {
  return (
   
    <div className='nav-main'>
  <div className='nav-div'>
      
  <div>
    <img className='logo' src={pic} alt='pic1'/>
    </div>
  <div>
      <button className='nav-btn'>SIGN IN</button>
      </div>
  </div>
  <Ellipse/>
  <Text/>
   </div>
   
  )
}

export default Navbar