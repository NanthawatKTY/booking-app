import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className='logo'>NamostBooking</span>
            <div className="navItems">
                <button type="button" className='navButton'>Register</button>
                <button type="button" className='navButton'>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar