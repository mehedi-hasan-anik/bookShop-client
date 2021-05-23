import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="container">
        <div className="home-bottom-area">
          <div style={{maxWidth:'300px', width:'100%', margin:'0 auto'}}>
              <ul>
                  <li> <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a> </li>
                  <li> <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a> </li>
                  <li> <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a> </li>
              </ul>
          </div>
     </div>
  </div>
    );
};

export default Footer;