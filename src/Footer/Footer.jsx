import React from 'react'
import './Footer.css'
import FbLogo from '../assets/FooterLogo/fb.png';
import IgLogo from '../assets/FooterLogo/ig.png';
import LinkedInLogo from '../assets/FooterLogo/linkedin.png';
import TwitterLogo from '../assets/FooterLogo/twitter.png';
import UpLogo from '../assets/FooterLogo/up.png';

function Footer() {

    const imgList = [FbLogo, IgLogo, LinkedInLogo, TwitterLogo, UpLogo];
    return (
        <div className="footer-main-container">
            <div className="footer-container">
                <div className="footer-contact-container">
                    <span>Contact Us</span>
                    <span>+91 93247 90295</span>
                    <span>teamkhayaal@gmail.com</span>
                </div>
                <div className="footer-logo-container">
                    {imgList.map((logo, index) => {
                        return <img key={index} src={logo} alt="Logo" />
                    })}
                </div>
                <div className="footer-newsletter-container">
                    <p>Subscribe to our Newsletter for updates and upcoming events</p>
                    <div className="footer-action-items">
                        <input type="email" name="email" id="email-newsletter" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer