import React from 'react';
import './style.css';

const ActivityButton = (props) => {
    return(
        <div className="main-activity-buttons-container">
            <button onClick = {() => props.click(props.reference[0])}>Covid Taskforce</button>
            <button onClick = {() => props.click(props.reference[1])}>Donation Drive</button>
            <button onClick = {() => props.click(props.reference[2])}>Women of Khayaal</button>
            <button onClick = {() => props.click(props.reference[3])}>Feed the paws</button>
        </div>
    );
}

export default ActivityButton;