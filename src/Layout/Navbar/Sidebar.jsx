import React from 'react'
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import KhayaalLogo from '../../assets/Logo/khayaal_logo.png';
import { motion } from 'framer-motion';

export default function (props) {
    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 25,
                stiffness: 500,
            }
        },
        exit: {
            y: "100vh",
            opacity: 0,
        }
    }
    let navigate = useNavigate();
    return (
        <>
            <motion.div
                className="backdrop"
                onClick={props.activateFunc}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div className="sidebar-parent-container"
                    variants={dropIn}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                >
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
                </motion.div>
            </motion.div>
        </>
    );
}