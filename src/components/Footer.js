import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Formas de contactarnos y demas!
        </p>
        <p className='footer-subscription-text'>
        
        </p>
        <div className='input-areas'>
         
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About imgages</h2>
            <a href='https://www.freepik.es/fotos/patron'>Foto de Patrón creado por freepik - www.freepik.es</a>
            <a href='https://www.freepik.es/fotos/espacio'>Foto de Espacio creado por pvproductions - www.freepik.es</a>
            <a href='https://www.freepik.es/fotos/fondo'>Foto de Fondo creado por valeria_aksakova - www.freepik.es</a>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
           
          </div>
        </div>
      </div>
      <div>
          <small class='website-rights' className="escudo"><img src="/images/escudo.png" alt="" id="escudo"/></small>
          </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Organic Care<i className="fas fa-leaf"></i>
              
            </Link>
          </div>
          
          
          <small class='website-rights'>Politicas de uso</small>
          <small class='website-rights'>Organic Care<i className="fas fa-leaf"></i> © 2020</small>
          <div class='social-icons'>
            <a href="https://web.facebook.com/organichaircare6-104243601332820/">
            <li
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </li>
            </a>
           
           <a href="https://www.instagram.com/organiccare_dr/">
           <li
              to=""
              class='social-icon-link instagram'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </li>
            </a> 
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;