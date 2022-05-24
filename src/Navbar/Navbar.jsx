import React, { useState } from 'react';
import './Navbar.css'

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const toggleIsActive = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    }

    return (
        <div className='nav'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Parent Organisation</a></li>
                <li><a href="#">Activities</a></li>
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
