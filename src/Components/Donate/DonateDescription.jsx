import React from "react";


const DonateDescription = (props) => {
    const { donateDescription, donateHeading } = props;

    return (
        <div className="donate-text-container">
            <h1>{donateHeading}</h1>
            <p className="donate-text donate-description">{donateDescription}</p>
            <p className="donate-text donate-description">{donateDescription}</p>
            <button className="join-btn" onClick={(e) => { e.preventDefault(); window.location.href = 'http://linktr.ee/teamkhayaal' }}>Join Us</button>
        </div>
    );
}

export default DonateDescription;