// This is not working I dont know why. It is working in sandbox(online compiler)
import React from 'react';
import FAB_icon from '../../assets/FAB_logo.png';
import './FAB.css';

const FAB = () => {
    return (
        <div className="fab-container">
            <div className="fab fab-icon-holder">
                <img src={FAB_icon} />
            </div>
            <ul className="fab-options">
                <li>
                    <a href="#" className="fab-options-label">Top</a>
                </li>
                <li>
				    <a href="#" className="fab-options-label">Activities</a>
                </li>
                <li>
                    <a href="#" className="fab-options-label">Education Campaign</a>
                </li>
                <li>
                    <a href="#" className="fab-options-label">Covid-19 Taskforce</a>
                </li>
                <li>
                    <a href="#" className="fab-options-label">Clothes Donation Drive</a>
                </li>
                <li>
                    <a href="#" className="fab-options-label">Feed The Paws</a>
                </li>
            </ul>
        </div>
    );
}

export default FAB;