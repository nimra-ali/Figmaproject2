import { useNavigate } from 'react-router-dom';
import './Loginform.css'
import { useState } from 'react';

const Loginform = () => {
const navigate = useNavigate()
   
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


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

    return (
        <div>
            <div className='signUpContentt'>
                <div className='signUpFormm'>
                    <img className='signLogoo' src={require('../Images/LOGO (1).png')} />
                    <div className='form-Div'>
                        <div className='formm'>
                            <div className='sign/loginBtns'>
                                <button className='signInn'>Sign In</button>
                                <button className='signUpss' onClick={handleSignUp}>Sign Up</button>
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
                                    <input
                                    className='passwordd'
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button className='sign-button' type="submit">Sign Up Now</button>
                                </form>
                                <p className='forget' onClick={forgetpswrd}>Forget Password?</p>
                            <div className='connected'>
                                <p className='linee'></p>
                                <p>Or Connect With</p>
                                <p className='linee'></p>
                            </div>
                            <div className='fb-tweeter'>
                                <button className='facebookk'>Facebook</button>
                                <button className='twitter'>Twitter</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
          </div>
    )
}
export default Loginform