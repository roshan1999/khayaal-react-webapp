import React from 'react'
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import KhayaalLogo from '../../assets/Logo/khayaal_logo.png';

export default function (props) {
    let navigate = useNavigate();
    return (
        <>
            <div className="backdrop" onClick={props.activateFunc}>
            </div>
            <div className="sidebar-parent-container">
                <div className="sidebar">
                    <img src={KhayaalLogo} alt="khayaal_logo.png" width="150px" />
                    <div className="sidebar-links">
                        <ul>
                            <li><button onClick={() => { props.activateFunc(); navigate("/") }}>Home</button></li>
                            <hr />
                            {/* <li><button onClick={() => {props.activateFunc(); navigate("/about")}}>About Us</button></li> */}
                            {/* <hr /> */}
                            {/* <li><button onClick={() => {props.activateFunc(); navigate("/parent")}}>Parent Organisation</button></li> */}
                            {/* <hr /> */}
                            <li><button onClick={() => { props.activateFunc(); navigate("/activities") }}>Activities</button></li>
                            <hr />
                            <li><button onClick={() => { props.activateFunc(); navigate("/members") }}>Members</button></li>
                            <hr />
                            <li>
                                <a href="http://linktr.ee/teamkhayaal">
                                    <button onClick={() => { props.activateFunc(); }}>Join Us
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}