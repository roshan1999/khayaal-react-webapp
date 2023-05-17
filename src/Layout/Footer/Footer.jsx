import React from 'react'
import './Footer.css'
import FbLogo from '../../assets/FooterLogo/fb.png';
import IgLogo from '../../assets/FooterLogo/ig.png';
import LinkedInLogo from '../../assets/FooterLogo/linkedin.png';
import TwitterLogo from '../../assets/FooterLogo/twitter.png';
import phoneIcon from "../../assets/FooterLogo/phone-call_filled.png"
import emailIcon from "../../assets/FooterLogo/email_filled.png"
import locationIcon from "../../assets/FooterLogo/location_filled.png"
import LegalDocModal from '../../Components/LegalDocModal/LegalDocModal';


function Footer() {
    const [ isOpen, setIsOpen ] = React.useState(false)
    const [ selectedDoc, setSelectedDoc ] = React.useState(null)
    const imgList = [{ img: FbLogo, link: "https://facebook.com/teamkhayaal" }, { img: IgLogo, link: "https://www.instagram.com/teamkhayaal/" }, { img: LinkedInLogo, link: "https://www.linkedin.com/company/khayaaldeliveringhope/" }, { img: TwitterLogo, link: "https://twitter.com/teamkhayaal" }];
    const contactDetails = {
        title: "Contact Us",
        phone: "9161834999",
        email: "team@khayaal.org",
        address: "3/60, Khayaal Foundation, Gomti Nagar, Vishal Khand, Gomti Nagar Rd, Lucknow 226010"
    }
    const handleOpen = (event) => {
        event.preventDefault();
        setSelectedDoc(event.target.innerText);
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto"; // restore scrollability to the body
    }
    

    return (
        <div className="footer-main-container">
            <div className="footer-container">
                <div className="footer-contact-container">
                    <span><b>{contactDetails.title}</b></span>
                    <span>
                        <img src={phoneIcon} alt='phone-icon' style={{width: "1.3rem", height: "1.3rem"}} />
                        <span>{contactDetails.phone}</span>
                    </span>
                    <span>
                        <img src={emailIcon} alt='email-icon' style={{width: "1.3rem", height: "1.3rem"}} />
                        <span>{contactDetails.email}</span>
                    </span>
                    <span>
                        <img src={locationIcon} alt='location-icon' style={{width: "1.3rem", height: "1.3rem"}} />
                        <span>{contactDetails.address}</span>
                    </span>
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
                        <input type="email" name="email" id="email-newsletter" placeholder='Email Address' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='footer-links-container'>
                <span onClick={handleOpen}>Privacy</span>
                <span onClick={handleOpen}>Terms & Conditions</span>
            </div>
            <LegalDocModal isOpen={isOpen} handleClose={handleClose} legalDoc={selectedDoc} />
        </div>
    )
}

export default Footer