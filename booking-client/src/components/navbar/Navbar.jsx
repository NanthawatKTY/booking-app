import "./navbar.css"
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
  const {user} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <div className="navContainer">
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
              <span className='logo'>NamostBooking</span>
            </Link>
            {/* If there's no user, it's gonna show these buttons*/}
            {user ? user.username : (<div className="navItems">
                <button type="button" className='navButton'>Register</button>
                <button type="button" className='navButton'>Sign in</button>
            </div>)}
        </div>
    </div>
  )
}

export default Navbar