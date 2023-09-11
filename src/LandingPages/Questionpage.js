// import React, { useState } from "react";
// import "./Questionpage.css";
// // import
// // import logo from '../pic/LOGO (1).png'
// // import logo from "../../pic/LOGO (1).png";
// // import NAvbar from "../Navbar";
// function Questionpage() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     emailAddress: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data:", formData);
//   };
//   return (
//     <div className="forgetpswd questionspage">
//       {/* <NAvbar /> */}
//       <div className="forget questionsquestion">
//         <div className="forgetlogo">
//           <h3 className="questionsh3">Have a question?</h3>
//         </div>
//         <div className="forgetform questionsupper">
//           <div className="formforget part2 againcop" style={{ height: "auto" }}>
//             <div className="forgetlist list2"></div>
//             <div className="ib ">
//               <form onSubmit={handleSubmit}>
//                 <div className="questioninputs">
//                   <div className="questioninput2">
//                     <input
//                 //  <input
//                  type="text"
//                  name="firstName"
//                  value={formData.firstName}
//                  onChange={handleChange}
//                  placeholder="First Name"
                
//                       style={{
//                         border: "1px solid #E0E4E9",
//                         textAlign: "start",
//                       }}
//                   /> 
//                   </div>
//                   <div className="questioninput2">
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       placeholder="Last Name"
          
//                       style={{
//                         border: "1px solid #E0E4E9",
//                         textAlign: "start",
//                         marginLeft: "12px",
//                         width: "95%",
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div className="quesop">
//                   <input
//                     type="email"
//                     name="emailAddress"
//                     value={formData.emailAddress}
//                     onChange={handleChange}
//                     placeholder="Email Address"
//                     style={{
//                       width: "93%",
//                       margin: "15px",
//                       textAlign: "start",
//                       border: "1px solid #E0E4E9",
//                     }}
//                   />
//                   <input
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="How can help you ?"
//                     className="quesinput"
//                     style={{
//                       width: "93%",
//                       margin: "15px",
//                       marginTop: "2px",
//                       height: "20vh",
//                       paddingTop: " -29px", // Adding padding to adjust text alignment
//                       textAlign: "left",
//                       border: "1px solid #E0E4E9",
//                       ":hover": {
//                         borderColor: "#FB775A", // Change to the desired hover border color
//                       },
//                     }}
//                   />
//                 </div>

//                 <button
//                   className="signbutton "
//                   style={{
//                     width: "93%",
//                     margin: "10px",
//                     marginLeft: "13px",
//                     marginBottom: "18px",
//                   }}
//                 >
//                   Submit
//                 </button>
//               </form>
  
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Questionpage;