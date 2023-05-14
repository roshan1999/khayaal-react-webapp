import SloganImg from '../../../../assets/Homepage/LandingImg.png';
import FilledButton from '../../../../Components/FilledButton/FilledButton';
import './LandingSlogan.css';

export default function LandingSlogan() {
    return (
        <div className="landing-intro-container">
            <div className="landing-intro-left-container">
                <div className="slogan-desc">
                    <span id="short-slogan">&ldquo;Education is the movement from Darkness to Light&rdquo;</span>
                    {/* <span className="about-img">About the picture</span> */}
                    <div className="action-items">
                        <FilledButton>Donate Now</FilledButton>
                        <button onClick={(e) => { e.preventDefault(); window.location.href = 'http://linktr.ee/teamkhayaal' }}
                            className='simple-button'>Join us</button>
                    </div>
                </div>
            </div>
            <div className="landing-intro-right-container">
                <img src={SloganImg} className="right-img" alt="right-img" />
            </div>
        </div>
    )
}