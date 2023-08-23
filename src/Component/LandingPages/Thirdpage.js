import './Thirdpage.css'
// import Navbar from '../Navbar'
const Thirdpage =()=>{
    return(
        <div>

<div className='mainn'>
                {/* <Navbar /> */}
                <div className='menuPlan'>
                <div className='dott'>
                        <img className='dott' src={require('../Images/Group 211.png')}/>
                    </div>
                    <div className='menutext'>
                        <h1 className='menuHead'>Meal plans are easy to manage</h1>
                        <p  className='menuPara'><span>Cottage</span> lets your customers buy meals from you one at a time, or buy meal plans from you. When customers sign up for one of your plans, Cottage will keep track of which plan they have and how much of it they've used. At checkout time, customers will automatically have their plan applied to their purchases.</p>
                    </div>
                    
                    <div className='menuPlanImg'>
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

export default Thirdpage;