import { useNavigate } from 'react-router-dom';
import '../Asset/Style.css/Navbar.css'
import SignUp from '../Authentication/Signup';

const Navbar = () => {
    const navigate = useNavigate();

    const handleForm = () => {
        navigate('/Signup')
    }
    return (
        <div className='mainnn'>

            <div className="nav">
                <div>

                    <img className='cottage' src={require('../Asset/Image/LOGO (1).png')} alt='cottage' />
            </div>
            <div>
                    <button className='nav-btn' onClick={handleForm}>SIGN UP</button>
            </div>
            </div>
        </div>
    )
}
export default Navbar;