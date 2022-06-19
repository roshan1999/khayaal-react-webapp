import LeaderDescription from "../OurTeams/LeaderDescription.jsx";
import "./ParentLeader2.css";
import React from 'react';
const ParentLeader2 = (props) => {
    const name = props.name;
    const position = props.position
    const desec = props.desec
    const imageurl = props.imageurl
    return (  
        <div className="lpc-2">
            <img className="leadimage-2" src={imageurl} alt="Leader's Image" />
            <div className="lpcdes-2">
                <LeaderDescription nameText={name} bold={props.bold} positionText={position} descText={desec}/>
            </div>
          </div>
    );
};
 
export default ParentLeader2;