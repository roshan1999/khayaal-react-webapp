import MainTitle from '../../Components/MainTitle/MainTitle';
import ParentLeader1 from '../../Components/ParentLeader1/ParentLeader1'
import ParentLeader2 from '../../Components/ParentLeader2/ParentLeader2'
import cc1 from '../../assets/ourteams/cc/cc1.png'
import cc2 from '../../assets/ourteams/cc/cc2.png'

import cwt1 from '../../assets/ourteams/cwt/cwt1.png'
import cwt2 from '../../assets/ourteams/cwt/cwt2.png'
import cwt3 from '../../assets/ourteams/cwt/cwt3.png'
import cwt4 from '../../assets/ourteams/cwt/cwt4.png'

import dt1 from '../../assets/ourteams/dt/dt1.png'
import dt2 from '../../assets/ourteams/dt/dt2.png'

import ect1 from '../../assets/ourteams/ect/ect1.png'
import ect2 from '../../assets/ourteams/ect/ect2.png'
import ect3 from '../../assets/ourteams/ect/ect3.png'

import hr1 from '../../assets/ourteams/hr/hr1.png'

import pr1 from '../../assets/ourteams/pr/pr1.png'
import pr2 from '../../assets/ourteams/pr/pr2.png'

import st1 from '../../assets/ourteams/st/st1.png'


import CO_F from '../../assets/ourteams/Leaders/CO_F.png';
import Founder from '../../assets/ourteams/Leaders/founder.png';
import './OurTeams.css';
import TeamsSecComponent from '../../Components/TeamsSecComponent/TeamsSecComponent';
import FAB from '../Floating-Button/FAB';
const OurTeams = () => {
    const founder = "Greetings everyone. I am currently pursuing a Bachelor's degree in Management Studies. I am a very outspoken and extroverted individual. My passion can be stationed down to helping people. It’s unbearable for me to see someone in pain and if I can help a person in need or make a stray dog wiggle its tail, my day is made. I believe we all can make an impactful change in society if our heart is full of pure intentions. At heart, I am a person who cares about the environment and children. I strongly believe that education combined with life skills can make the world a better place for those that find it difficult to access affordable education!"
    const  loremText="“Help others without expectations, keep your intentions clear and you will be rewarded.” "
    const Cofounder=" Being an enterprising individual who believes in creating an impact while making an income, I believe kindness is the only thing that matters when it comes to being a part of others' lives! I really couldn't care less about where someone comes from, as long as they are willing to learn new things and hold a certain sense of empathy towards others, I'll be there for them, even when they have nothing. Helping others comes naturally to me. As much as running a whole organization that helps people is a conscious thought, helping someone isn't. Khayaal is the part of my journey that allows me to help others, fuelling my forever subconscious to help others while making the life I've always dreamed for myself!"
    const educationCamp=[
        {name:"Palak Bhutani", imageurl:ect1, position:"President", quote:loremText},
        {name:"Khushi Mundra", imageurl:ect2, position:"Vice President", quote:loremText},
        {name:"Shreya Tiwari", imageurl:ect3, position:"Team Leader", quote:loremText}
    ];

    const publicRelations=[
        {name:"Viraj Gaikwad", imageurl:pr1, position:"President", quote:loremText},
        {name:"Dhruv Shah", imageurl:pr2, position:"Team Leader", quote:loremText}
    ];

    const stratergyTeam=[
        {name:"Uday Somaiya", imageurl:st1, position:"President", quote:loremText}
    ];

    const contentWriting=[
        {name:"Janvi Bhanushali", imageurl:cwt1, position:"President", quote:loremText},
        {name:"Divyanshi Chopra", imageurl:cwt2, position:"Vice President", quote:loremText},
        {name:"Heer Danani", imageurl:cwt3, position:"Team Leader", quote:loremText},
        {name:"Srishti Tiwari", imageurl:cwt4, position:"Team Leader", quote:loremText}
    ];

    const designTeam=[
        {name:"Sarika Kamble", imageurl:dt1, position:"President", quote:loremText},
        {name:"Ishika Soni", imageurl:dt2, position:"Team Leader", quote:loremText}
    ];

    const contentCreaters=[
        {name:"Iram Dhanani", imageurl:cc1, position:"President", quote:loremText},
        {name:"Jay Rathod", imageurl:cc2, position:"Team Leader", quote:loremText}
    ];

    const hr=[
        {name:"Mohammed Rangwala", imageurl:hr1, position:"President", quote:loremText}
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
            <ParentLeader1 name="Sharmishtha Singh" position="Founder of Khayaal" desec={founder} imageurl={Founder}></ParentLeader1> <br/>
            <ParentLeader2 name="Rohan Pariakar" position="Co-Founder of Khayaal" desec={Cofounder} imageurl={CO_F}></ParentLeader2>
            </div>
            <br/><br/>
            <FAB FAB_links={FAB_links}></FAB>
            <div id="ect"><TeamsSecComponent sectionHeading="Education Campaign" details={educationCamp}></TeamsSecComponent></div>
            <br/><br/> 
            <div id="pr"><TeamsSecComponent sectionHeading="Public Relations" details={publicRelations}></TeamsSecComponent></div>
            <br/><br/>
            <div id="stratergy"><TeamsSecComponent sectionHeading="Strategy Team" details={stratergyTeam}></TeamsSecComponent></div>
            <br/><br/>
            <div id="cwt"><TeamsSecComponent sectionHeading="Content Writing Team" details={contentWriting}></TeamsSecComponent></div>
            <br/><br/>
            <div id="dt"><TeamsSecComponent sectionHeading="Design Team" details={designTeam}></TeamsSecComponent></div>
            <br/><br/>
            <div id="cc"><TeamsSecComponent sectionHeading="Content Creators" details={contentCreaters}></TeamsSecComponent></div>
            <br/><br/>
            <div id="hr"><TeamsSecComponent sectionHeading="Human Resources" details={hr}></TeamsSecComponent></div>
             
        </div>
    );
}
 
export default OurTeams;