import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import carticon from '../Assets/cart_icon.png';

const Navbar = () => {
  return (
    <div>
          <div className="nav-logo">
              <img src={logo} alt="Logo" />
          </div>
          <br />

          <div className="navbar">
              <ul className="nav-menu">
                  <li>Home <hr /></li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Contact</li>
              </ul>
              <div className="nav-login-cart">
                  <button>Login</button>
                  <img src={carticon} alt="Cart" />
              </div>
          </div>
    </div>
  )
}

export default Navbar
