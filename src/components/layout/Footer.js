import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Pride Wedding Service Provider
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>

            <Link to="/sign-up">
            <Button buttonStyle='btn--outline'>Subscribe</Button>
            </Link>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <Link to='/aboutus'>
            <h2>About Us</h2>
          </Link>
            <Link to='/how-it-works'>How it works</Link>
            <Link to='/aboutus'>About us</Link>
            <Link to='/services'>Our services</Link>
            <Link to='/terms'>Terms and conditions</Link>
            <Link to='/privacy'>Privacy</Link>

            
          </div>
          <div class='footer-link-items'>
          <Link to='/contact-form'>
            <h2>Contact Us</h2>
          </Link>
            <p className="paralink">&nbsp;<i class="fas fa-phone"></i>  Call us +94702826664</p>
            <p className="paralink">&nbsp;<i class="fab fa-skype"></i>  Skype</p>
            <p className="paralink">&nbsp;<i class="fab fa-whatsapp"></i>  Whatsapp +94772452856</p>
            <p className="paralink">&nbsp;<i class="fas fa-map-marker-alt"></i>  No 123, Hapugala, Galle</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <Link to='/contact-info'>
            <h2>Follow Us</h2>
          </Link>
            <Link to='/contact-info'>&nbsp;<i class="fab fa-instagram"></i>  Instagram</Link>
            <Link to='/contact-info'>&nbsp;<i class="fab fa-facebook-f"></i>  Facebook</Link>
            <Link to='/contact-info'>&nbsp;<i class="fab fa-youtube"></i>  Youtube</Link>
            <Link to='/contact-info'>&nbsp;<i class="fab fa-twitter"></i>  Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
         
          <small class='website-rights'>Pride Wedding Planners © 2021|All rights reserved</small>
          <div class='social-icons'>

            <a
              href="https://www.facebook.com/Pride-Wedding-Planners-100516545407395"
              class='social-icon-link facebook'
              aria-label='Facebook'
              target='_blank'
           >
              <i class='fab fa-facebook-f' />
            </a>            <a
              href="https://www.instagram.com/learnbuildteach"
              class='social-icon-link instagram'
              aria-label='Instagram'
              target='_blank'
           >
              <i class='fab fa-instagram' />
            </a>            <a
              href="https://www.youtube.com/channel/UCR4UhNm7WoWAoIh1_fZ3dwA"
              class='social-icon-link youtube'
              aria-label='Youtube'
              target='_blank'
           >
              <i class='fab fa-youtube' />
            </a>
            <a
              href="https://twitter.com/PlannersPride"
              className='social-icon-link twitter'
              aria-label='Twitter'
              target='_blank'
           >
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
