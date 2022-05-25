import "./DividerAndHeading.css";
const DividerAndHeading = ({ heading }) => {
  return (
    <div className="divhead">
      <div className="divider"></div>
      <div className="heading">
        <h2>{heading}</h2>
      </div>
    </div>
  );
};

export default DividerAndHeading;
