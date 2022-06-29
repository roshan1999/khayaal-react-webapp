import "./DividerAndHeading.css";
const DividerAndHeading = (props) => {
  return (
    <div className="divhead">
      {/* <div className="page-divider"></div>
      <div className="section-heading"> */}
        <h2>{props.sectionHeading}</h2>
      </div>
    // </div>
  );
};

export default DividerAndHeading;
