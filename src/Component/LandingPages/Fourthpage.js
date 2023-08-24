import './Fourthpage.css'
// import Navbar from '../Navbar'
const Fourthpage =()=>{
    return(
        <div>
           <div className='mainn'>
                {/* <Navbar /> */}
                <div className='menu'>
                    <div className='menuItemImg'>
                        {/* <img src={require('../../Assest/menu.png')}/> */}
                    </div>
                    <div className='menutext'>
                        <h1 className='menuHead'>Schedule your menu items</h1>
                        <p  className='menuPara'>Use <span>Cottage</span> whether you're an occasional meal prep company or a multi-location enterprise, you can use schedules to make menu items only available on certain days. Also use schedules to set a deadline for ordering.</p>
                    </div>
                    <div className='dott'>
                        <img className='dott' src={require('../Images/Group 211.png')}/>
                    </div>
                    <div className='pinkdot'>
                        <img src={require('../Images/radio-right (2)4.png')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fourthpage