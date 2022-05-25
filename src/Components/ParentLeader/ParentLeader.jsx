import LeaderDescription from "./LeaderDescription";
import "./ParentLeader.css";
const ParentLeader = (props) => {
    const name = props.name;
    const position = props.position
    const desec = props.desec
    const imageurl = props.imageurl
    return (  
        <div className="lpc">
            <div className="lpcdes">
                <LeaderDescription name={name} position={position} desec={desec}/>
            </div>

            <img className="leadimage" src={imageurl} alt="Leader's Image" />
          </div>
    );
}
 
export default ParentLeader;