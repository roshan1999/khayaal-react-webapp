import MainTitle from '../../Components/MainTitle/MainTitle';
import ParentLeader1 from '../../Components/ParentLeader1/ParentLeader1'
import ParentLeader2 from '../../Components/ParentLeader2/ParentLeader2'
import leader from '../../assets/leader.png';
import person from '../../assets/person.png';
import './OurTeams.css';
import TeamsSecComponent from '../../Components/TeamsSecComponent/TeamsSecComponent';
import FAB from '../Floating-Button/FAB';
const OurTeams = () => {
    const loremText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloribus vel recusandae sed magni quidem quaerat ratione earum harum omnis."
    const sectionDetails=[
        {name:"Name", imageurl:{person}, position:"Position", quote:{loremText}},
        {name:"Name", imageurl:{person}, position:"Position", quote:{loremText}},
        {name:"Name", imageurl:{person}, position:"Position", quote:{loremText}},
        {name:"Name", imageurl:{person}, position:"Position", quote:{loremText}},
        {name:"Name", imageurl:{person}, position:"Position", quote:{loremText}},
        {name:"Name", imageurl:{person}, position:"Position", quote:{loremText}}
    ];
    return (
        <div className="our-teams-container">
            <MainTitle headingText="Our Teams"></MainTitle>
            <ParentLeader1 name="Name" position="Position" desec={loremText} imageurl={leader}></ParentLeader1>
            <ParentLeader2 name="Name" position="Position" desec={loremText} imageurl={leader}></ParentLeader2>
            <br/><br/>
            <FAB></FAB>
            {/* <TeamsSecComponent sectionHeading="Design Team" details={sectionDetails}></TeamsSecComponent>
            <br/><br/> 
            <TeamsSecComponent sectionHeading="Content Team" details={sectionDetails}></TeamsSecComponent>
            <br/><br/>
            <TeamsSecComponent sectionHeading="Finance Team" details={sectionDetails}></TeamsSecComponent>  */}
        </div>
    );
}
 
export default OurTeams;