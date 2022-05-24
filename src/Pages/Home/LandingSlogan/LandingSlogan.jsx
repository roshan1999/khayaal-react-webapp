import { ReactComponent as SloganImg } from '../../../assets/sloganimg.svg';
import FilledButton from '../../../Components/FilledButton/FilledButton';
import './LandingSlogan.css';

export default function LandingSlogan() {
    return (
        <div className="landing-intro-container">
            <div className="landing-intro-left-container">
                <div className="slogan-desc">
                    <span id="short-slogan">Short Slogan</span>
                    <span className="about-img">About the picture</span>
                    <div className="action-items">
                        <FilledButton>Donate Now</FilledButton>
                        <button className='simple-button'>Join us</button>
                    </div>
                </div>
            </div>
            <div className="landing-intro-right-container">
                <SloganImg className="right-img" />
                <div className="slogan-desc">
                    <span className="about-img">About the picture</span>
                    <div className="action-items">
                        <FilledButton>Donate Now</FilledButton>
                        <button className='simple-button'>Join us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}