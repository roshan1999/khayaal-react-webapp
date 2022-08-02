import './styles/font.css'
import './styles/colors.css'
import './App.css'
import React from 'react';
import Navbar from './Layout/Navbar/Navbar'
import LogoBox from './Layout/LogoBox/LogoBox'
import Footer from './Layout/Footer/Footer';
import Home from './Layout/Pages/Home/Home';
import About from './Layout/Pages/AboutUs/AboutUs';
import Campaign from './Layout/Pages/Campaign';
import OurTeams from './Layout/Pages/OurTeams/OurTeams';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Layout/Navbar/Sidebar';
import ScrollToTop from './hooks/ScrollToTop';


export default function App() {
  const [isActive, setIsActive] = React.useState(false);
  const toggleActive = (e) => {
    setIsActive(!isActive);
  }

  return (
    <div className='app-container'>
      <Router>
        <ScrollToTop />
        <LogoBox></LogoBox>
        <Navbar activateFunc={toggleActive} active={isActive}></Navbar>
        {isActive && <Sidebar active={isActive} activateFunc={toggleActive} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Campaign />} />
          <Route path="/members" element={<OurTeams />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}