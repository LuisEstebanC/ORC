import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import './Navbar.css';
import { useHistory } from "react-router-dom";
import {
    BrowserRouter as Router, 
    Link
  } from "react-router-dom";
import { Button } from './Button';




function Navbar(props) {

   
   
    


        const [click, setClick] = useState(false);
        const [button, setButton] = useState(true)

        const closeMobileMenu =() => setClick(false);
        const handleClick = () => setClick(!click);

        const showButton =() =>{
            if(window.innerWidth <= 960) {
                setButton(false);
            } else{
                setButton(true);
            }
        };

        useEffect(()=>{
            showButton()
        }, []);

        

        

        window.addEventListener('resize', showButton);

        return(
                
                <nav className="NavbarItems">    
                    <div className='navbar-container'>
                        <Link className="logo" to="/" onClick={closeMobileMenu}><h1 className="navbar-logo">Organic Care<i className="fas fa-leaf"></i></h1></Link>
                            <div className="menu-icon" onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                            </div> 
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li>
                                    <Link className="nav-links" to="/" onClick={closeMobileMenu}>Home</Link>
                                </li>
                                <li>
                                    <Link className="nav-links" to="/Form3" onClick={closeMobileMenu}>Products</Link>
                                </li>
                                <li>
                                    <Link className="nav-links" to="/Cotizacion" onClick={closeMobileMenu}>Cotizacion</Link>
                               </li>
                                <li>
                                    <Link className="nav-links" to="/About" onClick={closeMobileMenu}>About</Link>
                                </li>
                                <li>
                                    <Link className="nav-links" to="/Menu" onClick={closeMobileMenu}>Logout</Link>
                                </li>
                                <li>
                                    <Link className="nav-links-mobile" to="/Loginpage" onClick={closeMobileMenu}>Sing Up</Link>
                                </li>
                            </ul>

                         
                                <div>                                 
                                </div>
                            
                                 {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

                            
                    </div>
                </nav>
        );
    };
export default Navbar;