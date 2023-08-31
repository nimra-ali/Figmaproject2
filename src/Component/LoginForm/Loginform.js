import { useNavigate } from 'react-router-dom';
import './Loginform.css'
import { useState } from 'react';
import {  Input } from 'antd';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'


const Loginform = () => {
const navigate = useNavigate()
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [passwordError, setPasswordError] = useState('');



const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', {  password });
         
    };

    const forgetpswrd=()=>{
        navigate('/Forgetpasrd')
    }
    const handleSignUp=()=>{
        navigate('/Signup')
       }
       const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const validatePassword = (value) => {
        if (value.length > 0 && value.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
        } else if (value.length >= 6 && (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value))) {
            setPasswordError('Password must include an uppercase letter, lowercase letter, and a number.');
        } else {
            setPasswordError(''); // Clear the error message when the password meets the criteria
        }
    }

    return (
        <div>
            <div className='signUpContentt'>
                <div className='signUpFormm'>
                    <img className='signLogoo' src={require('../Images/LOGO (2).png')} />
                    <div className='form-Div'>
                        <div className='formm'>
                            <div className='sign/loginBtns'>
                                <button className='signInn'>Sign In</button>
                                <div className='SIGNUP'>
                                <button className='signUpss' onClick={handleSignUp}>Sign Up</button>
                                </div>
                            </div>
                            <div className='feildd'>
                                <form onSubmit={handleSubmit}>
                                 
                                     <input
                                    className='addresss'
                                        type="email"
                                        placeholder="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                                                        <div className="conFirm">
                                        <Input.Password
                                            className='password'
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                                validatePassword(e.target.value);
                                            }}
                                            iconRender={visible => (
                                                <span onClick={togglePasswordVisibility}>
                                                    {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </span>
                                            )}
                                        />
                                         {passwordError && <div className="error">{passwordError}</div>}
                                    </div>
                                    
                                    {/* <input
                                    className='passwordd'
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    /> */}
                                    <button className='sign-button' type="submit"  onClick={()=>{navigate('/Profilepage')}}>Sign In Now</button>
                                </form>
                                <p className='forget' onClick={forgetpswrd}>Forget Password?</p>
                            {/* <div className='connected'>
                                <p className='linee'></p>
                                <p className='P-CONECT'> Or Connect With</p>
                                <p className='linee'></p>
                            </div>
                            <div className='fb-tweeter'>
                                <button className='facebookk'>Facebook</button>
                                <button className='twitter'>Twitter</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
          </div>
    )
}
export default Loginform