import "./LeaderDescription.css"
import React from 'react';

const LeaderDescription = (props) => {
    return (
        <div className="leader-desc">
            <h2 className="leader-name">{props.nameText}</h2>
            <h3 className="leader-position">{props.positionText}</h3>
           <center> <p className="leader-contents">{props.descText}<br/></p><b className="boldt">{props.bold}</b></center>
           <center><button className="simple-btn">Know More</button></center>
        </div>
     );
}
 
export default LeaderDescription;