import React from "react";
import displayRazorpay from '../../hooks/displayRazorpay';

const fixedAmounts = ["100", "500", "1000", "2000"]
// TODO: Donation types when the backend is hosted
// const donationTypes = ["One-Time", "Monthly"]

export default function DonateBox(props) {
    const [ selectedAmount, setSelectedAmount ] = React.useState("0");
    // TODO: Donation options
    // const [ selectedDonationType, setDonationType ] = React.useState("One-Time")
    const [ donationMessage, setDonationMessage ] = React.useState("");
    const [ error, setError ] = React.useState("");

    const handleAmountSelection = (event) => {
        if(event.currentTarget.textContent === selectedAmount) {
            setSelectedAmount("0");
        }
        else {
            setSelectedAmount(event.currentTarget.textContent);
        }
        setError("");
    }

    // TODO: Donation options
    // const handleDonationTypeSelection = (event) => {
    //     setDonationType(event.currentTarget.textContent);
    //     setError("");
    // }

    const handleDonationSubmit = (event) => {
        if(selectedAmount === "0") {
            setError("Please choose or specify an amount to donate.");
            return;
        }
        else if(!(/^\d+(\.\d{1,2})?$/).test(selectedAmount)) {
            setError("Please provide a valid amount to donate.")
            return;
        }
        console.log(donationMessage);
        if(error === "") {
            const paymentDetails = {
                paymentAmount: parseFloat(selectedAmount),
                paymentMessage: donationMessage
            }
            displayRazorpay(paymentDetails);
        }
    }

    const handleCustomDonationAmount = (event) => {
        if(event.target.value === "") {
            setSelectedAmount("0");
        }
        else {
            setSelectedAmount((event.target.value).toString())
        }
        setError("")
    }

    const handleCustomDonationMessage = (event) => {
        // console.log(`Custom donation message: ${event.target.value}`)
        setDonationMessage(event.target.value);
    }

    return (
        <div className="donate-box">
            <div className="donate-box-content">
                <div className="donate-form">
                    <p className="donate-pledge-heading">Pledge Amount</p>
                    <div className="donate-pledge-amounts-container">
                        {fixedAmounts.map((amount) => {
                            return (<div 
                                key={amount}
                                className={`donate-general-options ${selectedAmount===amount ? "donate-pledge-amount-active" : ""}`} 
                                onClick={handleAmountSelection}
                                >
                                    {amount}
                                    </div>)
                        })}
                    </div>
                    <input 
                    className={`donate-custom-amount ${error !== "" ? "donate-error" : ""}`} 
                    type="number" placeholder={selectedAmount==="0" ? "Enter Custom Amount" : selectedAmount}
                    onChange={handleCustomDonationAmount} 
                    required={selectedAmount!==0?false:true}>
                    </input>
                    <input 
                    className="donate-custom-message" 
                    type="text" 
                    placeholder={donationMessage==="" ? "Message" : donationMessage }
                    onChange={handleCustomDonationMessage}
                    required={false}></input>
                    
                    {/* TODO: When the backend is hosted, expand the Donation options to include One-time and Monthly options */}
                    {/* <div className="donate-types-container">
                        {donationTypes.map((donationType) => {
                            return (<div 
                                key={donationType}
                                className={`donate-general-options ${selectedDonationType===donationType ? "donate-pledge-amount-active" : ""}`} 
                                onClick={handleDonationTypeSelection}
                                >
                                    {donationType}
                                    </div>)
                        })}
                    </div> */}

                    <label className="donate-error-label">{error!==""? error : null}</label>
                    <button 
                    onClick={handleDonationSubmit}
                    className={`donate-btn ${selectedAmount!=="0" ? "donate-btn-active" : ""}`}
                    >
                        Donate
                    </button>
                </div>
            </div>
        </div>
    );
}