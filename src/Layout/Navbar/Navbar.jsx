import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(props) {
    let navigate = useNavigate();
    return (
        <div className='nav'>
            <ul>
                <li><button onClick={() => navigate("/")}>Home</button></li>
                {/* <li><button onClick={() => navigate("/about")}>About Us</button></li> */}
                {/* <li><button onClick={() => navigate("/parent")}>Parent Organisation</button></li> */}
                <li><button onClick={() => navigate("/activities")}>Activities</button></li>
                <li><button onClick={() => navigate("/members"  )}>Members</button></li>
                <li><button onClick={() => navigate("/join")}>Join Us</button></li>
            </ul >
            <div className='action-items'>
                <button className="btn-filled">Donate Now</button>
                <div className={!props.active ? "hamburger" : "hamburger is-active"} onClick={props.activateFunc}>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div >
    );
}
