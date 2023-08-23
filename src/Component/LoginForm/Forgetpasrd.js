import React, { useState } from 'react'
import logo from '../Images/LOGO (1).png'
import './Forgetpasrd.css'
import {useNavigate } from 'react-router-dom';
function Forgetpswd() {
const navigate=useNavigate('')
    // const [isinstructionOpen , setinstructionOpen ] = useState(false); 

    const signin=()=>{
        navigate('/Loginform')
    }
    const signup=()=>{
        navigate('/Signup')
    }
    const handlecross = () => {
        setinstruction(false);
    };

    const [instruction,setinstruction]= useState('')
    // const [show ,setShow]=useState(true)

    const send=(e)=>{
    e.preventDefault();
    // setShow(true)
    setinstruction ( "If your email address is exists in our database, you will receive a password recovery link at your email address in a few minutes")
}
{<span className='croos' onClick={handlecross} >✖</span>}
  return (
    <div className='forgetpswd'> 
    <div className='forget'>
    <div className='forgetlogo'><img src={logo} alt='logo'/></div>
    <div className='forgetform'>
    
<div className='formforget'>
<h2>Forget Password</h2>
<input type='text' placeholder='Email Address'/>
{/* <button onClick={send}>Send Instruction</button> */}
{instruction ? (
                            <div>
                                <button onClick={handlecross}>Cancel</button>
                                <p>{instruction}</p>
                            </div>
                        ) : (
                            <button onClick={send}>Send Instruction</button>
                        )}


{/* <p onClick={handlecross}>{instruction}</p> */}
{/* {instruction} */}
<div className='forgetlist'>
    <h3 onClick={signin}>Sign In</h3>
    <h3 onClick={signup}>Create Account</h3>
    <h3 onClick={send}>Didn’t receive unlock instruction?</h3>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Forgetpswd;