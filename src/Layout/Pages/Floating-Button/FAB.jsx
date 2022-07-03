import React from 'react';
import FAB_icon from '../../../assets/FAB_logo.png';
import './FAB.css';

const FAB = (props) => {
    const FAB_links = props.FAB_links;
    return (
        <div className="fab-container">
            <div className="fab fab-icon-holder">
                <img src={FAB_icon} />
            </div>
            <ul className="fab-options">
                {FAB_links.map((link, index)=>{
                    return <li key = {index}><a key = {index} href={link.ref}>{link.title}</a></li>
                })}
            </ul>
        </div>
    );
}

export default FAB;