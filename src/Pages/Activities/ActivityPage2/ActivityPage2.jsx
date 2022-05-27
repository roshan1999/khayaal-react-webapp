import React, { Component } from 'react'
import './ActivityPage2.css';
import Picture2 from "../../../assets/image34.png";

const ActivityPage2 = (props) => {
    const heading2 = "Covid-19 Force"
    const body2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, labore nesciunt? Accusamus harum facere aperiam unde asperiores vero tempore delectus qui culpa, ullam, doloremque repellendus officiis eaque optio vitae nisi."

    return (
        <section className='page2'>
            <div className="container2">
            <div className="left2">
                <div className="content2">
                    <h1 className='leftHeading'>{heading2}</h1>
                    <p className='leftContent'>{body2}</p>
                </div>
            </div> 
            <div className="right2">
                <img src={Picture2} alt="" />
            </div>
        </div>
        </section>
        
    );
}
 
export default ActivityPage2;