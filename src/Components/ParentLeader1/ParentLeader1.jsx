import LeaderDescription from "../OurTeams/LeaderDescription.jsx";
import React from 'react';

import "./ParentLeader1.css";
const ParentLeader1 = (props) => {
    const name = props.name;
    const position = props.position;
    const desec = props.desec;
    const imageurl = props.imageurl;
    return (  
        <div className="lpc">
            <div className="lpcdes">
                <LeaderDescription nameText={name} bold={props.bold} positionText={position} descText={desec}/>
            </div>

            <img className="leadimage" src={imageurl} alt="Leader's Image" />
          </div>
    );
};
 
export default ParentLeader1;