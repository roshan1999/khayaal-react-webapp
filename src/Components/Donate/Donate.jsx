import React from "react";
import './Donate.css'
import DonateBox from "./DonateBox";
import DonateDescription from "./DonateDescription";


const whyDonate = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const donateHeading = "How will my Donations help?";

const Donate = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="donate-container">
            <DonateDescription donateDescription={whyDonate} donateHeading={donateHeading}/>
            <div className="donate-box-container">
                <DonateBox />
            </div>
        </div>
    );
});

export default Donate;