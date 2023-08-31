import React from 'react'
import './Homepage.css'
import Navbar from '../Component/Navbar';
const Homestyle = (props) => {
const {image, tittle , description , dotimg} = props;
console.log(image)
  return (
    <div className='background'>
        <Navbar/>
     <div className='mainn'>
                <div className='mein'>
                    <div className='dotts'>
                    <img src={dotimg}/>
                       
                    </div>
                    <div className='texts'>
                        <h1 className='h1'>{tittle}</h1>
                        <p className='menuPara'>{description}</p>
                    </div>
                    <div className='menuItemImg'>
                    <img src={image} className='menuItemImg'/>
                       
                    </div>
                   
                </div>
            </div>
    </div>

  )
}

export default Homestyle