// import Navbar from '../Navbar';
import './Fifth.css'
const Fifthpage =()=>{
    return(
        <div>
 
<div className='mainn'>
                {/* <Navbar /> */}
                <div className='menuPlan'>
                <div className='dott'>
                        <img className='dott' src={require('../Images/Group 211.png')}/>
                    </div>
                    <div className='menutext'>
                        <h1 className='menuHead'>Simplify your order management</h1>
                        <p  className='menuPara'><span>Cottage</span> processes your customer's orders and creates a list of menu items to be prepared, organized by day.</p>
                        < p className='payment'>Payments are handled securely by <span>Stripes</span></p>
                    </div>
                    
                    <div className='orderImg'>
                        {/* <img src={require('../../Assest/menu.png')}/> */}
                    </div>
                    <div className='pinkdot'>
                        <img src={require('../Images/radio-right.png')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fifthpage