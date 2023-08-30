import './Signup.css'
import React, { useState } from 'react';
import { Button, Modal as AntModal } from 'antd'; // Rename the Modal import to avoid conflicts
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

const Navigate = useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Moved the modal state to the top level

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleLogin = () => {
        Navigate('/Loginform');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { firstName, lastName, email, password });
    };

    return (
        <div>
            <div className='signUpContent'>
                <div className='signUpForm'>
                    <img className='signLogo' src={require('../Images/LOGO (1).png')} alt="Logo" />
                    <div className='formDiv'>
                        <div className='form'>
                            <div className='sign/loginBtns'>
                                <button className='signIn' onClick={handleLogin}>Sign In</button>
                                <div className='SIG'>
                                <button className='signUps'>Sign Up</button>
                                </div>
                            </div>
                            <div className='feild'>
                                <form className='form2' onSubmit={handleSubmit}>
                                    <input
                                        className='name'
                                        type="text"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <input
                                        className='name'
                                        type="text"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <div className='EEmail'>
                                    <input
                                        className='email'
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    </div>
                                    <div className='AAdress'>
                                    <input
                                        className='address'
                                        type="text"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    </div>
                                    <div className='conFirm'>
                                    <input
                                        className='password'
                                        type="password"
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    </div>
                                    <div className='S-BTN'>
                                    <button className='signbutton' type="submit" onClick={()=>{Navigate('/Verification')}}>Sign Up Now</button>
                                    </div>
                                </form>
                                <div className='MModal'>
                                <p className='terms'>By continuing, I agree to Cottage’s <span onClick={showModal}>Terms & Conditions.</span></p>
                                </div>
                                <div className='connect'>
                                    <p className='line'></p>
                                    <p>Or Connect With</p>
                                    <p className='line'></p>
                                </div>
                                <div className='fb-tweet'>
                                    {/* <div></div> */}
                                    <button className='facebook'>Facebook</button>
                                    <button className='twitter'>Twitter</button> {/* Corrected the class name */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Modal */}
            <AntModal
                title="Terms & Condition"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p className='modal-p'>Risus quis cursus tristique nisl. Neque nec eget volutpat pellentesque suscipit amet. Feugiat fames porta dapibus molestie eget ut. Orci non integer mauris pellentesque velit turpis gravida. Nibh ipsum vulputate faucibus nibh. Erat pellentesque augue nibh vestibulum. Et fermentum, egestas scelerisque odio praesent. Non nec scelerisque enim, suspendisse. Sit elit lectus morbi cursus cursus accumsan. Habitasse nulla eget urna, dignissim dignissim fames. Ac phasellus proin sed aenean neque, sed egestas viverra lectus. Orci non tristique eget phasellus. Aliquam ullamcorper sagittis non sapien pulvinar maecenas morbi phasellus. Suspendisse eu diam massa egestas facilisis egestas proin. Pharetra, pellentesque sit nibh pharetra sit ullamcorper posuere nulla. Fusce elit tellus aliquam iaculis malesuada vestibulum, in. Amet aliquam blandit vel sed. Dictum euismod velit tristique mi potenti et id feugiat auctor. Netus turpis sit tellus ante nec nulla. Arcu tortor, amet, in consectetur elit in. Interdum tincidunt ultrices elit risus integer sit viverra elit lorem. Nisl turpis auctor ut in felis eu in. Interdum sit nunc quis pulvinar nec. Nisl arcu est in commodo sed hac risus montes, phasellus. Mauris tellus ipsum, quis natoque in feugiat viverra volutpat. Faucibus aenean velit ipsum, purus tristique. Turpis a ut blandit non urna amet, congue. Id tincidunt turpis nisi eget. Ut velit, at leo quam in et. Sit sapien hendrerit id lacus, viverra odio. Euismod blandit ac quisque venenatis facilisis. Mollis ut dui pulvinar a, eget viverra pellentesque gravida amet. Risus, rutrum faucibus faucibus arcu at. Egestas enim, egestas hendrerit diam pharetra massa cum justo. Pharetra</p>
                
            </AntModal>
        </div>
    );
}

export default SignUp;


// http://zwug.github.io/react-full-page/
// https://wermetal.github.io/react-page-slides/ (https://npm.io/package/react-page-slides)
// https://cmswalker.github.io/fullpage-react/ (https://npm.io/package/fullpage-react)
// https://faisalst32.github.io/fullpage-react-fs/ (https://npm.io/package/fullpage-react-fs)