import React from 'react'
import LandingSlogan from './LandingSlogan/LandingSlogan';
import LandingAbout from './LandingAbout/LandingAbout';
import TeamSliderParent from './TeamSlider/TeamSliderParent';
import LandingLast from './LandingLast/LandingLast';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <LandingSlogan />
            <LandingAbout />
            <TeamSliderParent/>
            <LandingLast />
        </div>
    )
}

export default Home