import '../Asset/Style.css/Signup.css';
import React , {useState} from 'react';
import {Modal as AntModal, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'; 
import * as Yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import  auth  from './FirebaseConfig';

const SignUp = () => {
const Navigate = useNavigate();
const [isModalOpen, setIsModalOpen] = useState(false);

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must include an uppercase letter, lowercase letter, and a number'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
      
        await createUserWithEmailAndPassword(auth, values.email, values.password);

        console.log('User registered successfully:', values.email);

    
        resetForm();

      
        Navigate('/Verification');
      } catch (error) {
        console.error('Error creating user:', error.message);
  
      }
    },
  });
  const showModal = () => {
            setIsModalOpen(true);
        };
    
        const handleOk = () => {
            setIsModalOpen(false);
        };
    
        const handleCancel = () => {
            setIsModalOpen(false);
        };

        const openLogin=()=>{
            Navigate('/Loginform')
        }

        
  return (

    <div  className='signUpContent'>
   
        <div className='signUpForm'>
          <img className='signLogo' src={require('../Asset/Image/LOGO (1).png')} alt='Logo' />
          <div className='formDiv'>
            <div className='form'>
              <div className='sign/loginBtns'>
                <button className='signIn' onClick={openLogin}>
                  Sign In
                </button>
                <div className='SIG'>
                  <button className='signUps'>Sign Up</button>
                </div>
              </div>
              <div className='feild'>
                <form className='form2' onSubmit={formik.handleSubmit}>
                    <div className='flx-box'>
                        <div className='label1'>
                    <label >FirstName</label>
                    </div>
                  <input
                    className='name'
                    type='text'
                    name='firstName'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className='error'>{formik.errors.firstName}</div>
                  )}
                  <div className='label2'>
                    <label >LastName</label>
                    </div>
                  <input
                    className='lastname'
                    type='text'
                   
                    name='lastName'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className='error'>{formik.errors.lastName}</div>
                  )}
                  </div>
                  <div className='label3'>
                    <label >Email</label>
                    </div>
                  <div className='EEmail'>
                    <input
                      className='email'
                      type='email'
                  
                      name='email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className='error'>{formik.errors.email}</div>
                    )}
                  </div>
              
                  <div className='label3'>
                    <label >Password</label>
                    </div>
                    <Input.Password
                      className='password1'
                   
                      name='password'
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                   
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className='error'>{formik.errors.password}</div>
                    )}
                  
                  <div className='label3'>
                    <label >Confirm Password</label>
                    </div>
                    <Input.Password
                      className='password2'
                
                      name='confirmPassword'
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                  
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                      <div className='error'>{formik.errors.confirmPassword}</div>
                    )}
              
                  <div className='S-BTN'>
                    <button className='signbutton' type='submit'>
                      Sign Up Now
                    </button>
                  </div>
                </form>
                <div className='MModal'>
                  <p className='terms'>
                    By continuing, I agree to Cottage’s{' '}
                    <span onClick={showModal}>Terms & Conditions.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <AntModal title='Terms & Condition' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className='modal-p'>
          Risus quis cursus tristique nisl. Neque nec eget volutpat pellentesque suscipit amet. Feugiat fames porta
          dapibus molestie eget ut. Orci non integer mauris pellentesque velit turpis gravida. Nibh ipsum vulputate
          faucibus nibh. Erat pellentesque augue nibh vestibulum. Et fermentum, egestas scelerisque odio praesent. Non
          nec scelerisque enim, suspendisse. Sit elit lectus morbi cursus cursus accumsan. Habitasse nulla eget urna,
          dignissim dignissim fames. Ac phasellus proin sed aenean neque, sed egestas viverra lectus. Orci non tristique
          eget phasellus. Aliquam ullamcorper sagittis non sapien pulvinar maecenas morbi phasellus. Suspendisse eu diam
          massa egestas facilisis egestas proin. Pharetra, pellentesque sit nibh pharetra sit ullamcorper posuere nulla.
          Fusce elit tellus aliquam iaculis malesuada vestibulum, in. Amet aliquam blandit vel sed. Dictum euismod velit
          tristique mi potenti et id feugiat auctor. Netus turpis sit tellus ante nec nulla. Arcu tortor, amet, in
          consectetur elit in. Interdum tincidunt ultrices elit risus integer sit viverra elit lorem. Nisl turpis auctor
          ut in felis eu in. Interdum sit nunc quis pulvinar nec. Nisl arcu est in commodo sed hac risus montes,
          phasellus. Mauris/</p>
          </AntModal>
          </div>
)}
  export default SignUp;