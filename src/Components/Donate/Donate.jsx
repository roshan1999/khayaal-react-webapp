import React from "react";
import './Donate.css'
import DonateBox from "./DonateBox";
import DonateDescription from "./DonateDescription";

const Donate = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="donate-container">
            <DonateDescription />
            <div className="donate-box-container">
                <DonateBox />
            </div>
        </div>
    );
});

export default Donate;