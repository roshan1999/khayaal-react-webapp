import LeaderDescription from "../OurTeams/LeaderDescription.jsx";
import "./ParentLeader2.css";
const ParentLeader2 = (props) => {
  const name = props.name;
  const position = props.position;
  const desec = props.desec;
  const imageurl = props.imageurl;
  return (
    <div className="leader-desc-container">
      <div className="image-left">
        <div className="lpc">
          <div className="lpc-image-holder">
            <img className="leadimage" src={imageurl} alt="Leader's Image" />
          </div>
          <div className="lpcdes-2">
            <LeaderDescription
              nameText={name}
              positionText={position}
              descText={desec}
            />
          </div>
        </div>
      </div>
      <div className="image-between">
        <div className="lpc">
          <div className="lpc-image-holder">
            <img className="leadimage" src={imageurl} alt="Leader's Image" />
          </div>
          <div className="lpcdes">
            <LeaderDescription
              nameText={name}
              positionText={position}
              descText={desec}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentLeader2;
