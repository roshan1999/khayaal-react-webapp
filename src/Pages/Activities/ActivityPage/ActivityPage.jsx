import React, { Component } from 'react'
import InitiativeDescription from "../Initiative-description/Initiative-description";
import { useState } from 'react';
import './ActivityPage.css';
import Picture from "../../../assets/image 39.png";

const ActivityPage = (props) => {
    
    const heading = "Education Campaign" 
    const body = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, labore nesciunt? Accusamus harum facere aperiam unde asperiores vero tempore delectus qui culpa, ullam, doloremque repellendus officiis eaque optio vitae nisi."

    return(
        <div className="outerContainer">
            <div className="layer1">
                <img className='initiativePic' src= {Picture} alt="" />
            </div>
            <div className="layer2">
                <InitiativeDescription />
                headingText={heading}
                contentText={body}
            </div>
        </div>
    );
}

export default ActivityPage;