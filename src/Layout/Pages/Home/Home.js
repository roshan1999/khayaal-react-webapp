import React from 'react'
import LandingSlogan from './LandingSlogan/LandingSlogan';
import LandingAbout from './LandingAbout/LandingAbout';
import TeamSliderParent from './TeamSlider/TeamSliderParent';
// import LandingLast from './LandingLast/LandingLast';
import './Home.css';
import Donate from '../../../Components/Donate/Donate';

const Home = (props) => {
    const { donateSectionRef } = props;
    return (
        <div className="home-container">
            <LandingSlogan donateSectionRef={donateSectionRef}/>
            <LandingAbout />
            <TeamSliderParent/>
            {/* <LandingLast /> */}
            <Donate ref={donateSectionRef}/>
        </div>
    )
}

export default Home