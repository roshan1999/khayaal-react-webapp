import './Activities.css'
 import AboutActivities from './About-activities/About-activities';
//  import pic1 from "../../assets/activity/khayaal-activity-1.png";
 import pic2 from "../../assets/activity/khayaal-activity-2.png";
 import pic3 from "../../assets/activity/khayaal-activity-3.png";
//  import pic5 from "../../assets/activity/khayaal-activity-5.png";
 import pic6 from "../../assets/activity/khayaal-activity-6.jpeg";
import bg from "../../assets/Activity-Page-Bg1.png";
import bg2 from "../../assets/Activity-Page-Bg2.png";
 import womenAtKhayaal from '../../assets/activity/women-at-khayaal.png';
import ActivityComponent from './ActivityComponent/ActivityComponent';
import ActivitySections from './Activity-sections/ActivitySections';

const Activities = () => {
   
    return (
        <div className="activities-page">
        <ActivityComponent />
        <ActivitySections />
       
        <div id="covid"><AboutActivities
            bg= {bg} 
            headingcolor="white" 
            pic={pic2} heading = "Covid Taskforce " 
            description = '"A helping hand can save lives."'
            seconddescription = "When you are determined to help, it's surprising the things that you can do! We wanted to support our nation in the tough times of the COVID-19 outbreak and thus we helped the patients to find medicines, hospitals, oxygen cylinders etc. according to their requirements. It was a tough time but we were glad to save so many lives."
         /></div>
          <div id="donation"><AboutActivities
            headingcolor="var(--primary-dark)" 
            contentcolor="var(--info-text-color)" 
            pic={pic3} heading = "Donation Drive" 
            description = '"A piece of clothing, for peace of mind."'
            seconddescription = "We only use 40% of our wardrobe. Why not utilize the 60% for individuals who sleep unclothed? So, Team Khayaal decided to express their solidarity with those less fortunate than us by donating clothes. We successfully donated more than 4000+ clothes in places like Calcutta, South Bombay, Andheri, Mulund, Kanpur, Uttarakhand, Andheri, thereby spreading coziness with others and bringing a smile to their face."
        /></div>
         <div id="women"><AboutActivities
            bg= {bg2} 
            headingcolor="white" 
            pic={womenAtKhayaal} heading = "Women of Khayaal" 
            seconddescription = "Every 3 in 5 women get harassed. Each day, 92 women get raped, that is one woman in 15 minutes! Our society failed to create a safe space for women. They go through a lot each day. Sexist remarks, victim-blaming, Abuse & a lot more. This campaign was to bring attention to the same."
         /></div>
         <div id="feed"><AboutActivities
            headingcolor="var(--primary-dark)" 
            contentcolor="var(--info-text-color)" 
            pic={pic6} heading = "Feed The Paws" 
            description = '"A wiggle for their paws."'
            seconddescription = "We want to work for stray animals with whom we share our mother earth. We aim to provide them with the bare minimum and protect them whilst we can. We will be collecting leftovers from hotels and restaurants so that these leftovers can feed strays."
          /> </div>
         </div>
        // <FAB />
    );
}
 
export default Activities;