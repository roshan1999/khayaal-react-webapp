import MainTitle from '../../../Components/MainTitle/MainTitle';
import ParentLeader1 from '../../../Components/ParentLeader1/ParentLeader1'
import ParentLeader2 from '../../../Components/ParentLeader2/ParentLeader2'
import cc1 from '../../../assets/ourteams/contentcreate/cc1.png'
import cc2 from '../../../assets/ourteams/contentcreate/cc2.png'

import cwt1 from '../../../assets/ourteams/contentwrite/cwt1.png'
import cwt2 from '../../../assets/ourteams/contentwrite/cwt2.png'
import cwt3 from '../../../assets/ourteams/contentwrite/cwt3.png'
import cwt4 from '../../../assets/ourteams/contentwrite/cwt4.png'

import dt1 from '../../../assets/ourteams/design/dt1.png'
import dt2 from '../../../assets/ourteams/design/dt2.png'

import ect1 from '../../../assets/ourteams/educationcamp/ect1.png'
import ect2 from '../../../assets/ourteams/educationcamp/ect2.png'
import ect3 from '../../../assets/ourteams/educationcamp/ect3.png'

import hr1 from '../../../assets/ourteams/hr/hr1.png'
import hr2 from '../../../assets/ourteams/hr/hr2.png'

import pr1 from '../../../assets/ourteams/publicrelations/pr1.png'
import pr2 from '../../../assets/ourteams/publicrelations/pr2.png'

import st1 from '../../../assets/ourteams/strategyteam/st1.png'


import CO_F from '../../../assets/ourteams/Leaders/CO_F.png';
import Founder from '../../../assets/ourteams/Leaders/sharmishtha_new.jpg';
import './OurTeams.css';
import TeamsSecComponent from '../../../Components/TeamsSecComponent/TeamsSecComponent';
import FAB from '../Floating-Button/FAB';
const OurTeams = () => {
    const founder = "Greetings everyone. I am currently pursuing a Bachelor's degree in Management Studies. I am a very outspoken and extroverted individual. My passion can be stationed down to helping people. It’s unbearable for me to see someone in pain and if I can help a person in need or make a stray dog wiggle its tail, my day is made. I believe we all can make an impactful change in society if our heart is full of pure intentions. At heart, I am a person who cares about the environment and children."
    const founderbold = " I strongly believe that education combined with life skills can make the world a better place for those that find it difficult to access affordable education!"
    const Cofounder = " Being an enterprising individual who believes in creating an impact while making an income, I believe kindness is the only thing that matters when it comes to being a part of others' lives! I really couldn't care less about where someone comes from, as long as they are willing to learn new things and hold a certain sense of empathy towards others, I'll be there for them, even when they have nothing. Helping others comes naturally to me. As much as running a whole organization that helps people is a conscious thought, helping someone isn't. "
    const cofounderbold = "Khayaal is the part of my journey that allows me to help others, fuelling my forever subconscious to help others while making the life I've always dreamed for myself!"
    const educationCamp = [
        { name: "Pallak Bhutani", imageurl: ect1, position: "President", quote: "Help others without expectations, keep your intentions clear and you will be rewarded" },
        { name: "Khushi Mundra", imageurl: ect2, position: "Vice President", quote: "Life goes on, it won’t stop, so love while you can, give while you can and live while you can!" },
        { name: "Shreya Tiwari", imageurl: ect3, position: "Team Leader", quote: "Write your purpose with pen and path with a pencil" }
    ];

    const publicRelations = [
        { name: "Viraj Gaikwad", imageurl: pr1, position: "President", quote: "To live a creative life, lose the fear of being wrong!" },
        { name: "Dhruv Shah", imageurl: pr2, position: "Team Leader", quote: "Act with love and you’ll never fear anything" }
    ];

    const stratergyTeam = [
        { name: "Uday Somaiya", imageurl: st1, position: "President", quote: "You don’t have to have it all figured out before you move forward. Just take the first step" }
    ];

    const contentWriting = [
        { name: "Janvi Bhanushali", imageurl: cwt1, position: "President", quote: "Out beyond the ideas of right-doing and wrongdoing, there is a field I will meet you there" },
        { name: "Divyanshi Chopra", imageurl: cwt2, position: "Vice President", quote: "At this moment, there are people only you can reach and a difference only you can make" },
        { name: "Heer Danani", imageurl: cwt3, position: "Team Leader", quote: "The value of creation is underrated. Your Art, Words and Love have the potential of leaving a permanent mark on this world. Let’s leave behind a good one" },
        { name: "Srishti Tiwari", imageurl: cwt4, position: "Team Leader", quote: "Situations get difficult because you're strong enough to handle it" }
    ];

    const designTeam = [
        { name: "Sanika Kamble", imageurl: dt1, position: "President", quote: "We can't help everyone but everyone can help someone" },
        { name: "Ishika Soni", imageurl: dt2, position: "Team Leader", quote: "Kindness will save the world, is exactly what keeps me going" }
    ];

    const contentCreaters = [
        { name: "Iram Dhanani", imageurl: cc1, position: "President", quote: "There is power in kindness, so if you can be anything, be kind" },
        { name: "Jay Rathod", imageurl: cc2, position: "Team Leader", quote: "It’s what you do in the dark that puts you in the light" }
    ];

    const hr = [
        { name: "Mohammed Rangwala", imageurl: hr1, position: "President", quote: "Look around carefully and you’ll be surprised to find new learning, new experience and new victories every single day" },
        { name: "Sukriti Misra", imageurl: hr2, position: "Team Leader", quote: "Wherever life plants you, bloom with grace" }
    ];


    const FAB_links = [
        { ref: "#", title: "Top" },
        { ref: "#leaders", title: "Leaders" },
        { ref: "#ect", title: "Education Campaign" },
        { ref: "#pr", title: "Public Relations" },
        { ref: "#stratergy", title: "Strategy Team" },
        { ref: "#cwt", title: "Content Writing Team" },
        { ref: "#dt", title: "Design Team" },
        { ref: "#cc", title: "Content Creators" },
        { ref: "#hr", title: "Human Resources" },
    ]
    return (
        <div className="our-teams-container">
            <MainTitle headingText="Our Leaders"></MainTitle>
            <div id="leaders">
                <ParentLeader1 name="Sharmishtha Singh" position="Founder of Khayaal" desec={founder} bold={founderbold} imageurl={Founder}></ParentLeader1>
                <ParentLeader2 name="Rohan Pariakar" position="Co-Founder of Khayaal" desec={Cofounder} bold={cofounderbold} imageurl={CO_F}></ParentLeader2>
            </div>
            <br />
            <FAB FAB_links={FAB_links}></FAB>
            <div id="ect"><TeamsSecComponent sectionHeading="Education Campaign" details={educationCamp}></TeamsSecComponent></div>
            <br />
            <div id="pr"><TeamsSecComponent sectionHeading="Public Relations" details={publicRelations}></TeamsSecComponent></div>
            <br />
            <div id="stratergy"><TeamsSecComponent sectionHeading="Strategy Team" details={stratergyTeam}></TeamsSecComponent></div>
            <br />
            <div id="cwt"><TeamsSecComponent sectionHeading="Content Writing Team" details={contentWriting}></TeamsSecComponent></div>
            <br />
            <div id="dt"><TeamsSecComponent sectionHeading="Design Team" details={designTeam}></TeamsSecComponent></div>
            <br />
            <div id="cc"><TeamsSecComponent sectionHeading="Content Creators" details={contentCreaters}></TeamsSecComponent></div>
            <br />
            <div id="hr"><TeamsSecComponent sectionHeading="Human Resources" details={hr}></TeamsSecComponent></div>

        </div>
    );
}

export default OurTeams;