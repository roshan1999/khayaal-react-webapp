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
    const details=[
        {name:"Name", imageurl:person, position:"Position", quote:loremText},
        {name:"Name", imageurl:person, position:"Position", quote:loremText},
        {name:"Name", imageurl:person, position:"Position", quote:loremText},
        {name:"Name", imageurl:person, position:"Position", quote:loremText},
        {name:"Name", imageurl:person, position:"Position", quote:loremText},
        {name:"Name", imageurl:person, position:"Position", quote:loremText}
    ];
    const FAB_links=[
        {ref:"/members", title:"Top"},
        {ref:"#leaders", title:"Leaders"},
        {ref:"#design", title:"Design Team"},
        {ref:"#content", title:"Content Team"},
        {ref:"#finance", title:"Finance Team"},
    ]
    return (
        <div className="our-teams-container">
            <MainTitle headingText="Our Leaders"></MainTitle>
            <div id="leaders">
            <ParentLeader1 name="Name" position="Position" desec={loremText} imageurl={leader}></ParentLeader1> <br/>
            <ParentLeader2 name="Name" position="Position" desec={loremText} imageurl={leader}></ParentLeader2>
            </div>
            <br/><br/>
            <FAB FAB_links={FAB_links}></FAB>
            <div id="design"><TeamsSecComponent sectionHeading="Design Team" details={details}></TeamsSecComponent></div>
            <br/><br/> 
            <div id="content"><TeamsSecComponent sectionHeading="Content Team" details={details}></TeamsSecComponent></div>
            <br/><br/>
            <div id="finance"><TeamsSecComponent sectionHeading="Finance Team" details={details}></TeamsSecComponent></div>
             
        </div>
    );
}
 
export default OurTeams;