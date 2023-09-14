import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Asset/Style.scss/Loginform.scss'
import { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import auth from './FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must include an uppercase letter, lowercase letter, and a number'),
});
const Loginform = () => {
  const Navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const openForget = () => {
    Navigate('/Forgetpswd')
  }
  const openSignup = () => {
    Navigate('/Signup')
  }
  return (
    <div>
      <div className='signUpContentt'>
        <div className='signUpFormm'>
          <img className='signLogoo' src={require('../Images/LOGO (2).png')} alt="logo" />
          <div className='form-Div'>
            <div className='formm'>
              <div className='sign/loginBtns'>
                <button className='signInn'>Sign In</button>
                <div className='SIGNUP'>
                  <button className='signUpss' onClick={openSignup}>Sign Up</button>
                </div>
              </div>

              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  await signInWithEmailAndPassword(auth, values.email, values.password)
                  resetForm();
                  console.log('login succcesfull')
                }}
              >

                <Form>

                  <Field type="email" name="email" className='EMAIL' placeholder="Email" />
                  <ErrorMessage name="email" component="div" className="error" />

                  <div className="conFirm">
                    <Field className='PASSWORD'
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className={`password-toggle-icon ${showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}`}
                    >
                      {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </span>

                    <ErrorMessage name="password" component="div" className="error" />
                  </div>
                  <button className='sign-button' type="submit">Sign In Now</button>
                </Form>
              </Formik>
              <p className='forget' onClick={openForget} >Forget Password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Loginform;