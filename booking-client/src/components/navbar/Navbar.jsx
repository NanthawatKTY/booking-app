import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
              <span className='logo'>NamostBooking</span>
            </Link>
            <div className="navItems">
                <button type="button" className='navButton'>Register</button>
                <button type="button" className='navButton'>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar