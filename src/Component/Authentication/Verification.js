import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import logo from '../Images/LOGO (2).png';
import '../Asset/Style.scss/Verification.scss'
import  auth  from "./FirebaseConfig"; // Import auth from FirebaseConfig.js
import  sendVerificationEmail  from 'firebase/auth';

function Verification() {
  const initialValues = {
    verificationCode: "",
  };

  const validationSchema = Yup.object().shape({
    verificationCode: Yup.string()
      .matches(/^[0-9]{6}$/, "Verification code must be 6 digits") // Use regex to match 6 digits
      .required("Verification code is required"),
  });

  // Define the handleSubmit function
  const handleSubmit = (values) => {
    console.log("Submitted values:", values);

    // Send verification email
    sendVerificationEmail();
  };

  // Define the sendVerificationEmail function
  const sendVerificationEmail = () => {
    const user = auth.currentUser;

    user.sendEmailVerification()
      .then(() => {
        console.log("Verification email sent.");
      })
      .catch((error) => {
        console.error("Error sending verification email:", error);
      });
  };

  return (
    <div className="forgetpswd">
      <div className="forget3">
        <div className="VERIFICATION-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="forgetform2">
          <div className="formforget part2">
            <h2>Verification Code</h2>
            <div className="forgetlist list2">
              We emailed you a six-digit code to
              <h4>randommail@mail.com</h4>
              Enter the code below to confirm your email address.
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit} // Use handleSubmit here
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="ib">
                    <Field
                      type="text"
                      name="verificationCode"
                      placeholder="Your one-time six-digit code"
                    />
                    <button type="submit">
                      Verify now
                    </button>
                    {errors.verificationCode && touched.verificationCode ? (
                      <p style={{ color: "red", fontWeight: "750" }}>
                        {errors.verificationCode}
                      </p>
                    ) : null}
                  </div>
                </Form>
              )}
            </Formik>
            <h5 className="verifyh5">
              Question? <span>We are here to help</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
