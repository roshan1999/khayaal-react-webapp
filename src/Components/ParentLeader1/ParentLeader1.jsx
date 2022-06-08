import LeaderDescription from "../OurTeams/LeaderDescription.jsx";

import "./ParentLeader1.css";
const ParentLeader1 = (props) => {
  const name = props.name;
  const position = props.position;
  const desec = props.desec;
  const imageurl = props.imageurl;
  return (
    <div className="leader-desc-container">
      <div className="image-right">
        <div className="lpc">
          <div className="lpcdes-1">
            <LeaderDescription
              nameText={name}
              positionText={position}
              descText={desec}
            />
          </div>
          <div className="lpc-image-holder">
            <img src={imageurl} alt="Leader's Image" />
          </div>
        </div>
      </div>
      <div className="image-between">
        <div className="lpc-image-holder">
          <img src={imageurl} alt="Leader's Image" />
        </div>
        <div className="lpc">
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

export default ParentLeader1;
