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
import Modal from './Components/Modal/index';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [isActive, setIsActive] = React.useState(false);
  const [isDonateActive, setIsDonateActive] = React.useState(false);
  const donateSectionRef = React.useRef(null);
  const toggleActive = (e) => {
    setIsActive(!isActive);
  }
  const activateDonate = (e) => {
    console.log("Activated Donate function")
    setIsDonateActive(true);
  }
  const deactivateDonate = (e) => {
    console.log("Deactivated Donate function")
    setIsDonateActive(false);
  }

  return (
    <div className='app-container'>
      {isDonateActive && <Modal isDonateActive={isDonateActive} deactivateDonate={deactivateDonate} />}
      <AnimatePresence exitBeforeEnter onExitComplete={deactivateDonate}>
        <Router location={window.location} key = {window.location.pathname}>
          <ScrollToTop />
          <LogoBox></LogoBox>
          <Navbar activateFunc={toggleActive} active={isActive} activateDonate={activateDonate} deactivateDonate={deactivateDonate} donateSectionRef={donateSectionRef}></Navbar>
          {isActive && <Sidebar active={isActive} activateFunc={toggleActive} />}
          <Routes>
            <Route path="/" element={<Home donateSectionRef={donateSectionRef}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Campaign />} />
            <Route path="/members" element={<OurTeams />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Router>
      </AnimatePresence>
    </div>
  );
}