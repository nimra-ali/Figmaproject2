import React from 'react'
import './Homepage.css'
import Buttoncomp from './Buttoncomp';
// import Navbar from '../Component/Navbar';
const Homestyle = (props) => {
const {image, tittle , description , dotimg , button , button2} = props;
console.log(image)
  return (

   //  <div className='background'>
   //      {/* <Navbar/> */}
   //   <div className='mainn'>
                <div className='mein'>
                    <div className='dotts'>
                    {/* <img src={dotimg}/> */}
                       </div>
                    <div className='texts'>
                        <h1 className='h1'>{tittle}</h1>
                        <p className='menuPara'>{description}</p>
                        <div className='buttonstyle'>
                         {button?(<Buttoncomp 
                            bgclr='white'
                            width='170px'
                            height='50px'
                            radius={'3px'}
                            textColor={'#192E46'}
                            border={'1px solid #192E46'}
                            textSize={'16px'}
                            left={'237%'}
                            top={'40%'}
                       

                         btnText={button2}/>):(null)}
                         <div className='btn-comp'>
                         {button2?(<Buttoncomp 
                             bgclr='#F37357'
                             width='170px'
                             height='50px'
                             radius={'3px'}
                             textColor={'white'}
                             border={'#F37357'}
                             textSize={'16px'}
                            
                         
                         btnText={button}/>):(null)}
                         </div>
                       </div>
                    </div>
                 
                    <div className='menuItemImg'>
                    <img src={image} className='menuItemImg'/>
                       
                    </div>
                   </div>
   //          </div>
   //  </div>

  )
}

export default Homestyle;