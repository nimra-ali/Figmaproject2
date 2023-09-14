import React, { useState } from 'react';
import { Form , Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from '../Asset/Image/LOGO (1).png';
import '../Asset/Style.scss/Forgetpasrd.scss';
import { useNavigate } from 'react-router-dom';
import  auth  from './FirebaseConfig'
import { sendPasswordResetEmail } from 'firebase/auth'; 
import { message } from 'antd';

const validationSchema = Yup.object().shape({
  email: Yup.string()
  // .email('Invalid email address')
  .required('Email is required'),
});

function Forgetpswd() {

  const handleSubmit = (values , {resetForm}) => {
    sendPasswordResetEmail(auth , values.email)
    .then((auth) => {
      message.success(
        "password reset email sent successfully . please check your email"
      );
navigate('/Loginform')
    })
    .catch((err) => {
      message.error(`password reset failed. Error code: ${err.code}`)
    });
    resetForm();
  }

  const navigate = useNavigate();

  const signin = () => {
    navigate('/Loginform');
  };
  const signup = () => {
    navigate('/Signup');
  };
  const handlecross = () => {
    setinstruction(false);
  };
  const [instruction, setinstruction] = useState('')
  const send = (e) => {
    e.preventDefault();
    setinstruction("If your email address is exists in our database, you will receive a password recovery link at your email address in a few minutes")
  }

  return (
    <div className='forgetpswd'>
      <div className='forget'>
        <div className='forgetlogo'><img src={logo} alt='logo' /></div>
        <div className='forgetform'>
          <div className='formforget'>
            <h2>Forget Password</h2>
            <Formik
              initialValues={{ email: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              //   setinstruction("If your email address is exists in our database, you will receive a password recovery link at your email address in a few minutes");
              //   setSubmitting(false);
              // }}
            >
              {({ errors , touched}) => (
                <Form>
                  <Field type='text' name='email' placeholder='Email Address' />
                  <ErrorMessage name='email' component='div' className='error' />
                  <div className='space'>
                  <button type='submit'>Reset</button>
                  </div>
                 
                </Form>
              )}
            </Formik>
            {instruction ? (
                    <div>
                      <button onClick={handlecross}>Cancel</button>
                      <p>{instruction}</p>
                    </div>
                  ) : (
                    
                    <button onClick={send}>Send Instruction</button>
                  )}
            <div className='forgetlist'>
              <h3 onClick={signin}>Sign In</h3>
              <h3 onClick={signup}>Create Account</h3>
              <h3 onClick={send}>Didn’t receive unlock instruction?</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgetpswd;