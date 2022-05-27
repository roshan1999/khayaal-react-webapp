import React, { Component } from 'react'
import './ActivityPage.css';
import Picture from "../../../assets/image39.png";

const ActivityPage = (props) => {
    const heading = "Education Campaign"
    const body = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, labore nesciunt? Accusamus harum facere aperiam unde asperiores vero tempore delectus qui culpa, ullam, doloremque repellendus officiis eaque optio vitae nisi."

    return (
        <section className='page1'>
            <div className="container">
            <div className="left">
                <img src={Picture} alt="" />
            </div>
            <div className="right">
                <div className="content">
                    <h1 className='rightHeading'>{heading}</h1>
                    <p className='rightContent'>{body}</p>
                </div>
            </div>
        </div>
        </section>
        
    );
}
 
export default ActivityPage;