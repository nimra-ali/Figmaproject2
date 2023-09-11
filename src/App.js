import './App.css';
import Homepages from './Component/CommonCom/Homepages';
import Signup from './Component/Authentication/Signup';
import Loginform from './Component/Authentication/Loginform';
import { Routes, Route } from 'react-router-dom';
import Forgetpswd from './Component/Authentication/Forgetpasrd';
import Verification from './Component/Authentication/Verification'

function App() {
return (
    <div className='main-js'>
    <Routes>
      <Route path='/' Component={Homepages} exact/>
      <Route path='/Forgetpswd' Component={Forgetpswd} exact/>
      <Route path='/Signup' Component={Signup} exact/>
      <Route path='/Loginform' Component={Loginform}/>
      <Route path='/Verification' Component={Verification} exact/>
     </Routes>
    </div>
)}
export default App;