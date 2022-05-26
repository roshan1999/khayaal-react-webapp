import Card from "../Card/Card";
import "./SectionLayout.css";
const SectionLayout = () => {
  return (
    <div className="section-layout">
      <div className="cards-row">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default SectionLayout;
