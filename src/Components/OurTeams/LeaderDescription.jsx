import "./LeaderDescription.css"
const LeaderDescription = (props) => {
    return (
        <div className="leader-desc">
            <h2 className="leader-name">{props.nameText}</h2>
            <h3 className="leader-position">{props.positionText}</h3>
            <p className="leader-contents">{props.descText}</p>
        </div>
     );
}
 
export default LeaderDescription;