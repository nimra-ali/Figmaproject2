import { useNavigate } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate();

    const handleForm = () => {
        navigate('/signUp')
    }
    return (
        <div className='mainnn'>

            <div className="nav">
                <div>

                    <img className='cottage' src={require('./Images/LOGO (1).png')} alt='cottage' />
            </div>
            <div>
                    <button className='nav-btn' onClick={handleForm}>SIGN IN</button>
            </div>
            </div>
        </div>
    )
}
export default Navbar;