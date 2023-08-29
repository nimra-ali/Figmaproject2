// import Navbar  from '../Navbar'
import './Firstpage.css'
// import Secondpage from './Secondpage'
// import Thirdpage from './Thirdpage'
// import Fourthpage from './Fourthpage'
// import Fifthpage from './Fifthpage'
// import Lastpage from './Lastpage'
// import { useNavigate } from 'react-router-dom';
const GetStart = () => {
   
    return (
        <div>
            <div className='main'>
               {/* <Navbar/> */}
                <div>
                    <div className='content'>
                        <div className='dot'>
                            <img className='dots' src={require('../Images/Group 211.png')} />
                        </div>
                        <div className='takeMeal'>
                            <p className='mealText'>Take your meal  prep company
                             to the <span>next level</span></p>
                            <p className='mealPara'><span>cottage</span>
                                 will help you reach more customers and simplify managing your site, your menus, and your orders, letting you focus on delivering great food.</p>
                            <div className='button'>
                                <button className='started'>GET STARTED</button>
                                <button className='more'>LEARN MORE</button>
                            </div>
                        </div>

                        <div className='overView'>
                            
                                        <img className='homepage' src={require('../Images/homepage_1.png')}/>
                                        <div className='pinkDots'>
                                    <img className='pink' src={require('../Images/radio-right1.png')}/>
                                </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    {/* <Secondpage/>
                  <Thirdpage/>
                  <Fourthpage/>
                  <Fifthpage/>
                  <Lastpage/> */}
                </div>
           
       
    )
}

export default GetStart