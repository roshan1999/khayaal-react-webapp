import React from "react";


const donateMessageFirst = "With your support, we can provide essential educational resources like books, stationary and supplies which will help our children build a brighter future for themselves.";
const donateMessageSecond = "Khayaal intends to light the candle of education in the life of children that are unable to afford it  Your donations will play a pivotal role in helping us keep that candle going for as long as possible."
const donateHeading = "How will my Donations help?";

const DonateDescription = (props) => {

    return (
        <div className="donate-text-container">
            <h1>{donateHeading}</h1>
            <p className="donate-text donate-description">{donateMessageFirst}</p>
            <p className="donate-text donate-description">{donateMessageSecond}</p>
            <button className="join-btn" onClick={(e) => { e.preventDefault(); window.location.href = 'http://linktr.ee/teamkhayaal' }}>Join Us</button>
        </div>
    );
}

export default DonateDescription;