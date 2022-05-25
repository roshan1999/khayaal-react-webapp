import "./LeaderDescription.css"
const LeaderDescription = ({name,position,desc}) => {
    return (
        <div className="leaderDesc">
            <h2 className="leaderName">{name}</h2>
            <h3 className="leaderPosition">{position}</h3>
            <p className="leaderContents">{desc}</p>
        </div>
     );
}
 
export default LeaderDescription;