import { useState } from "react";
import Card from "../Card/Card";
import DividerAndHeading from "../OurTeams/DividerAndHeading";
import './TeamsSecComponent.css'

const TeamsSecComponent = (props) => {
    const sectionHeading = props.sectionHeading;
    const [details, setDetails] = useState(props.details)

    return (
    <div className="secc">
        <DividerAndHeading sectionHeading={sectionHeading} />

        <div  className="cards">

            {details.map((person) => {
                return <Card name={person.name} imageurl={person.imageurl} position={person.position} quote={person.quote} />
            })}
    
        </div>
    </div>
    

       





      );
}
 
export default TeamsSecComponent;