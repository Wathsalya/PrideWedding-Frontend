import React, { Component } from "react";
//import { Link } from 'react-router-dom';

import "./index.css";
import "./contactinfo.css";
import emailjs from 'emailjs-com';
import logo from './images/couple3.PNG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
export default class Contactinfo extends Component {
    render() {
        return (
          
            <form>
               <br></br>
                <h3 className="testClass">Follow Us on</h3>
               
              <img src={logo} alt="Logo" />;
                <div className="social-container">
                <h4>@prideweddingplanners</h4>
                <a
                   href="https://www.youtube.com/channel/UCR4UhNm7WoWAoIh1_fZ3dwA"
                    className="youtube social"
                    target='_blank'
                >
        <FontAwesomeIcon icon={faYoutube} size="4x"  />
      </a>
      <a
        href="https://www.facebook.com/Pride-Wedding-Planners-100516545407395"
        className="facebook social"
        target='_blank'
      >
        <FontAwesomeIcon icon={faFacebook} size="4x" />
      </a>
      <a href="https://twitter.com/PlannersPride" 
      className="twitter social"
      target='_blank'>
        
        <FontAwesomeIcon icon={faTwitter} size="4x" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
        target='_blank'
      >
        <FontAwesomeIcon icon={faInstagram} size="4x"  />
      </a>
    </div>
            </form>
         
        );
    }
}

