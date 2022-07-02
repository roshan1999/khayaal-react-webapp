import './styles/font.css'
import './styles/colors.css'
import './App.css'
import React from 'react';
import Navbar from './Layout/Navbar/Navbar'
import LogoBox from './Layout/LogoBox/LogoBox'
import Footer from './Layout/Footer/Footer';
import Home from './Layout/Pages/Home/Home';
import About from './Layout/Pages/AboutUs/AboutUs';
import Activities from './Layout/Pages/Activities/Activities';
import OurTeams from './Layout/Pages/OurTeams/OurTeams';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div className='app-container'>
      <Router>
        <LogoBox></LogoBox>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/activities" element = {<Activities />} />
          <Route path="/members" element = {<OurTeams />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}