import React,{useState} from 'react'
import './Verification.css'
import logo from '../Images/LOGO (2).png'
// import { useNavigate } from 'react-router-dom';

function Verification() {
// const Navigate = useNavigate()
const [instruction,setinstruction]= useState('')

    const send=(e)=>{
        e.preventDefault();
        // setShow(true)
    setinstruction("Code did not match, please try again")
    }
    const handlecross=()=>{
         setinstruction(false)
    }
   
    return (
        <div className='forgetpswd'> 
        <div className='forget'>
        <div className='forgetlogo'><img src={logo} alt='logo'/></div>
        <div className='forgetform'>
        
    <div className='formforget part2'>
    <h2>Verification Code</h2>
    <div className='forgetlist list2'>
    We emailed you a six-digit code to
    <h4>randommail@mail.com</h4>
Enter the code below to confirm your email address.

    </div>
    <div className='ib'>
    <input type='text' placeholder='Your one time six-digit code'/>
    {instruction ? (
                            <div>
                                <button onClick={handlecross}>Cancel</button>
                                <p>{instruction}</p>
                            </div>
                        ) : (
                            <button onClick={send}>Send Instruction</button>
                        )}
    </div>
    {/* <p>{instruction}</p> */}

    <h5 className='verifyh5'>Question? <span>We are here to help</span></h5>
    </div>

        </div>
        </div>
        </div>
      )  
}

export default Verification;
