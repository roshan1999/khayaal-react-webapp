import React from 'react'
import LandingSlogan from './LandingSlogan/LandingSlogan';
import LandingAbout from './LandingAbout/LandingAbout';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <LandingSlogan />
            <LandingAbout />
        </div>
    )
}

export default Home