import React from 'react'
import './Footer.css'
import FbLogo from '../../assets/FooterLogo/fb.png';
import IgLogo from '../../assets/FooterLogo/ig.png';
import LinkedInLogo from '../../assets/FooterLogo/linkedin.png';
import TwitterLogo from '../../assets/FooterLogo/twitter.png';


function Footer() {
    const legalDocLinks = {
        privacy: "https://docs.google.com/document/d/1qLowbQwnAOD4AKuhays48RdhkH6BM9f7/edit?usp=drivesdk&ouid=105560095203525235771&rtpof=true&sd=true",
        termsAndConditions: "https://docs.google.com/document/d/1DilKI5Vw98dpILeGXOcADehPVceo-cj0/edit?usp=drivesdk&ouid=105560095203525235771&rtpof=true&sd=true"
    }
    const imgList = [{ img: FbLogo, link: "https://facebook.com/teamkhayaal" }, { img: IgLogo, link: "https://www.instagram.com/teamkhayaal/" }, { img: LinkedInLogo, link: "https://www.linkedin.com/company/khayaaldeliveringhope/" }, { img: TwitterLogo, link: "https://twitter.com/teamkhayaal" }];

    return (
        <div className="footer-main-container">
            <div className="footer-container">
                <div className="footer-contact-container">
                    <span>Contact Us</span>
                    <span>9876543210</span>
                    <span>team@khayaal.org</span>
                </div>
                <div className="footer-logo-container">
                    {imgList.map((imgInfo, index) => {
                        return(
                        <a key = {index} href={imgInfo.link}>
                            <img key={index} src={imgInfo.img} alt="Logo" />
                        </a>
                    )})}
                </div>
                <div className="footer-newsletter-container">
                    <p>Subscribe to our Newsletter </p>
                    <p>for updates and upcoming events</p>
                    <div className="footer-action-items">
                        <input type="email" name="email" id="email-newsletter" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='footer-links-container'>
                <a target="_blank" rel="noopener noreferrer" href={legalDocLinks.privacy}>Privacy</a>
                <a target="_blank" rel="noopener noreferrer" href={legalDocLinks.termsAndConditions}>Terms & Conditions</a>

            </div>
        </div>
    )
}

export default Footer