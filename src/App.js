import './styles/font.css'
import './styles/colors.css'
import './App.css'
import React from 'react';
import Navbar from './Navbar/Navbar'
import LogoBox from './LogoBox/LogoBox'
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/AboutUs/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurTeams from './Pages/OurTeams/OurTeams';
import ActivitiesPage from "../src/Pages/Activities/Activities"
import DonatePage from './Pages/Donate/DonatePage';
export default function App() {
  return (
    <div className='app-container'>
      <Router>
        <LogoBox></LogoBox>
        <Navbar></Navbar> 
        
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/activities" element = {<ActivitiesPage />} />
          <Route path="/members" element = {<OurTeams/>}/>
          <Route path="/donate" element = {<DonatePage/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}