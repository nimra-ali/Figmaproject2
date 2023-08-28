import './App.css';
import Signup from './Component/SignupPage/Signup';
import Loginform from './Component/LoginForm/Loginform';
import { Routes, Route } from 'react-router-dom';
// import Firstpage from './Component/LandingPages/Firstpage'
import Forgetpswd from './Component/LoginForm/Forgetpasrd';
import Verificaton from './Component/SignupPage/Verification';
import Slides from './Component/LandingPages/Slides';
import Profile from './Component/Profilepage/Profile';
// import Profile from './Component/Profilepage/Profile';







function App() {
  return (
    <div className="main">
      {/* <Profile/> */}
     {/* <Loginform/>   */}
     
      
     <Routes>
     
      <Route path='/' Component={Slides} exact/>
      <Route path='/Forgetpasrd' Component={Forgetpswd} exact/>
      <Route path='/Profilepage' Component={Profile} exact/>
      <Route path='/Signup' Component={Signup} exact/>
      <Route path='/Loginform' Component={Loginform}/>
      <Route path='/Verification' Component={Verificaton} exact/>
    
     </Routes>
    
      </div>
  );
}

export default App;
