import React from 'react'
import '../Asset/Style.scss/Homepage.scss'
import Buttoncomp from './Buttoncomp';


const Homestyle = (props) => {
const {image, tittle , description ,  button , button2} = props;
console.log(image)
  return (

  
                <div className='mein'>
                    <div className='dotts'>
                       </div>
                    <div className='texts'>
                        <h1 className='h2'>{tittle}</h1>
                        <p className='menuPara'>{description}</p>
                        <div className='buttonstyle'>
                           <div className='buttonstyle-2'>
                         {button?(<Buttoncomp 
                            bgclr='white'
                            width='190px'
                            height='45px'
                            radius={'3px'}
                            textColor={'#192E46'}
                            border={'1px solid #192E46'}
                            textSize={'16px'}
                            left={'299%'}
                            top={'47%'}
                            cursor={'pointer'}
                       

                         btnText={button2}/>):(null)}
                         </div>
                         <div className='btn-comp'>
                         {button2?(<Buttoncomp 
                             bgclr='#F37357'
                             width='190px'
                             height='45px'
                             radius={'3px'}
                             textColor={'white'}
                             border={'#F37357'}
                             textSize={'16px'}
                          

                             btnText={button}/>):(null)}
                       </div>
                         </div>
                    </div>
                 
                    <div className='menuItemImg'>
                    <img src={image} className='menuItemImg' alt='menuu'/>
                       
                    </div>
                   </div>
)
}
export default Homestyle;

