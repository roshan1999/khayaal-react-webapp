import React from 'react';
import './style.css';

const ActivityButton = (props) => {
    return(
        <div className="main-activity-buttons-container">
            <button>Covid Taskforce</button>
            <button>Donation Drive</button>
            <button>Women of Khayaal</button>
            <button>Feed the paws</button>
        </div>
    );
}

export default ActivityButton;