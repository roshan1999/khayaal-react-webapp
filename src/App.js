import './styles/font.css'
import './styles/colors.css'
import './App.css'
import React from 'react';
import Navbar from './Navbar/Navbar'
import LogoBox from './LogoBox/LogoBox'
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/AboutUs/AboutUs';
import ActivitiesPage from './Pages/Activities/Activities';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import ActivityPage from './Pages/Activities/ActivityPage/ActivityPage';
import ActivityPage2 from './Pages/Activities/ActivityPage2/ActivityPage2';
import OurTeams from './Pages/OurTeams/OurTeams';
=======

>>>>>>> 80f44923fd51ba11ddddf34937e77d391b8d1f78

export default function App() {
  return (
    <div className='app-container'>
      <Router>
        <LogoBox></LogoBox>
<<<<<<< HEAD
        <Navbar></Navbar> 
        
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/activities" element = {<Activities />} />
          <Route path="/members" element = {<OurTeams/>}/>
          
        </Routes>
=======
        <Navbar></Navbar>
        
       <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/activities" element = {<ActivitiesPage />} />
        </Routes> 
        <Footer />
>>>>>>> 80f44923fd51ba11ddddf34937e77d391b8d1f78
      </Router>
    </div>
  );
}