import './styles/font.css'
import './styles/colors.css'
import './App.css'
import React from 'react';
import Navbar from './Navbar/Navbar'
import LogoBox from './LogoBox/LogoBox'
import LandingAbout from './Pages/Home/LandingAbout/LandingAbout';
import LandingSlogan from './Pages/Home/LandingSlogan/LandingSlogan';
import Footer from './Footer/Footer';


export default function App() {
  return (
    <div>
      <div className="main-app">
        <LogoBox></LogoBox>
        <Navbar></Navbar>
        <LandingSlogan />
        <LandingAbout />
        <Footer />
      </div>
    </div>
  );
}