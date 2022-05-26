// There is an issue in this.
// There are different background color and h1 tag 
// text-align in every repetition 
import React from 'react';
import './Initiative-description.css';

const InitiativeDescription = (props) => {
    const color = props.bgcolor;
    return (
        <div className="Initiative-description-container">
            <div className="description-header">
                <h1 className="initiativeHeading">{props.headingText}</h1>
                {/* <h1>Hello</h1> */}
            </div>
            <div className="description-content">
                <p className='initiativeText'>{props.contentText}</p>
                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, labore nesciunt? Accusamus harum facere aperiam unde asperiores vero tempore delectus qui culpa, ullam, doloremque repellendus officiis eaque optio vitae nisi.
                </p> */}
            </div>
        </div>
    );
}
 
export default InitiativeDescription;