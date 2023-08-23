import './App.css';
import Signup from './Component/SignupPage/Signup';
import Loginform from './Component/LoginForm/Loginform';
import { Routes, Route } from 'react-router-dom';
import Firstpage from './Component/LandingPages/Firstpage'
import Forgetpswd from './Component/LoginForm/Forgetpasrd';
import Verificaton from './Component/SignupPage/Verification';
import Slides from './Component/LandingPages/Slides';
// import Navbar from './Component/Navbar';
// import Menu from './Component/Menu/Menu'
// import Menutwo from './Component/MenuTwo/Menutwo';
// import Schedule from './Component/Schedules/Schedule';






function App() {
  return (
    <div className="main">
      {/* <Navbar/> */}
      {/* <Signup/> */}
     {/* <Loginform/>   */}
     
     <Routes>
     
      <Route path='/' Component={Slides} exact/>
      <Route path='/Forgetpasrd' Component={Forgetpswd} exact/>
      <Route path='/Signup' Component={Signup} exact/>
      <Route path='/Loginform' Component={Loginform}/>
      <Route path='/Verification' Component={Verificaton} exact/>
      {/* <Route path='/' Component={Menu} exact/> */}
     </Routes>
     {/* <Menu/> */}
     {/* <Menutwo/> */}
     {/* <Schedule/> */}
      </div>
  );
}

export default App;
