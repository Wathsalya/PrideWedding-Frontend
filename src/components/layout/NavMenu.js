import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { GiLinkedRings } from "react-icons/gi";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <div> <GiLinkedRings/>&nbsp; </div>
              Pride Wedding Service Providers
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/selection' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                  Home&nbsp;<i class="fas fa-home"></i>
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/services' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                  Our Services
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to='/contact-form'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact Us&nbsp; <i class="far fa-envelope"></i>
                </Link>
              </li>

              <li className="nav-item dropdown">
              <ul className="nav-links " 
              type="button" 
              id="navbarDropdownMenuLink" 
              data-bs-toggle="dropdown"
              >
              Sign In&nbsp;<i class="fas fa-sign-in-alt"></i>
              </ul>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>  <Link className="dropdown-item"  to={"/sign-in"}>SignIn as Client</Link> </li>
                  <li>  <Link className="dropdown-item"  to={"/sign-in-vendor"}>SignIn as Vendor</Link> </li>

                </ul>
              </li>
          
              <li className="nav-item dropdown">
              <ul className="nav-links " 
              type="button" 
              id="navbarDropdownMenuLink" 
              data-bs-toggle="dropdown"
              >
              Sign Up&nbsp;<i class="fas fa-user-plus"></i>
              </ul>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>  <Link className="dropdown-item"  to={"/Client-Registration"}>SignUp as Client</Link> </li>
                  <li>  <Link className="dropdown-item"  to={"/Vendor-Registration"}>SignUp as Vendor</Link> </li>

                </ul>
              </li>
           
             
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
