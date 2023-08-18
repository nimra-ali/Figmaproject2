import React from 'react'
import './Text.css'
import all from './Images/homepage_1.png'

function Text() {
  return (
    <div className='text-main'>
        <div className='heading'>
            <h1 className='text-h1'>Take your meal prep company to the <p className='decor'>next level</p></h1>
        </div>
        <div className='paragraph'>
            <p className='text-p'><b className='color'>Cottage</b> will help you reach more customers and simplify managing your site, 
            your menus, and your orders, letting you focus on delivering great food.</p>
           

           <div className='bttn1'>
 <button className='text-btn1'>GET STARTED</button>
           </div>
           <div className='bttn'>
  <button className='text-btn2'>LEARN MORE</button>
           </div>
        </div>
        <div className='flex'>
        <div className='img-div'>
<img className='hero-img' src={all} alt='picture'/>
        </div>
        <div className='dots'>
       <div className='dot1'></div>
       <div className='dot2'></div>
       <div className='dot3'></div>
       <div className='dot4'></div>
       <div className='dot5'></div>
       <div className='dot5'></div>


        </div>
        </div>
        </div>
  )
}

export default Text;