import React from 'react';
import { useNavigate } from 'react-router-dom';
import FilledButton from '../../Components/FilledButton/FilledButton';
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
                <li><button onClick={() => navigate("/members")}>Members</button></li>
                <li>
                    <a href="http://linktr.ee/teamkhayaal">
                        <button onClick={() => navigate("/join")}>Join Us</button>
                    </a>
                </li>
            </ul >
            <div className='action-items'>
                <FilledButton label="Donate Now" action="Popup" donateSectionRef={props.donateSectionRef} activateDonate={props.activateDonate} />
                {/* <button className="btn-filled" onClick={()=>props.activateDonate()}>Donate Now</button> */}
                <div className={!props.active ? "hamburger" : "hamburger is-active"} onClick={props.activateFunc}>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div >
    );
}
