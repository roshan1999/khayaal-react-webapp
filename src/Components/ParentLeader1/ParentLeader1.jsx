import LeaderDescription from "../OurTeams/LeaderDescription.jsx";

import "./ParentLeader1.css";
const ParentLeader1 = (props) => {
  const name = props.name;
  const position = props.position;
  const desec = props.desec;
  const imageurl = props.imageurl;
  return (
    <div className="lpc">
      <div className="lpcdes">
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
  );
};

export default ParentLeader1;
