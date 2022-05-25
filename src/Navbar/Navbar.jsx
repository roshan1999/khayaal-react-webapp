import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    let navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const toggleIsActive = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    }

    return (
        <div className='nav'>
            <ul>
                <li><a onClick={()=>navigate("/")}>Home</a></li>
                <li><a onClick={()=>navigate("/about")}>About Us</a></li>
                <li><a href="#">Parent Organisation</a></li>
                <li><a onClick={()=>navigate("/activities")}>Activities</a></li>
                <li><a href="#">Members</a></li>
                <li><a href="#">Join Us</a></li>
            </ul >
            <div className='action-items'>
                <button className="btn-filled">Donate Now</button>
                <div className={!isActive ? "hamburger" : "hamburger is-active"} onClick={toggleIsActive}>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div >
    );
}
