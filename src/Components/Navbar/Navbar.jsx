import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalCartItems } = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>ShopVerse</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: "none", color: "#626262" }} to="/">Home</Link></li>
        <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">Men
        </Link></li>
        <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: "none", color: "#626262" }} to="/womens">Women
        </Link></li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: "none", color: "#626262" }} to="/kids">Kids</Link></li>
      </ul>
      <div className="nav-login-cart">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="nav-signin-btn">Sign In</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
        <Link to="/cart"><img src={cart_icon} alt="" height="40px" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar