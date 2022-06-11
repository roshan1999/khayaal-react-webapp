import './Activities.css'
import AboutActivities from './About-activities/About-activities';
import pic1 from "../../assets/Activity-Image1.png";
import pic2 from "../../assets/Activity-Image2.png";
import pic3 from "../../assets/Activity-Image3.png";
import bg from "../../assets/Activity-Page-Bg1.png";
import bg2 from "../../assets/Activity-Page-Bg2.png";
import ActivityComponent from './ActivityComponent/ActivityComponent';

const Activities = () => {
   
    return (
        <div className="activities-page">
        <ActivityComponent />
        <AboutActivities
            headingcolor="var(--primary-dark)" 
            contentcolor="var(--info-text-color)" 
            pic={pic1} heading = "Activity" 
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dapibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel semper ligula, a dictum felis. Sed efficitur mi lacinia, tempus est et, tempus felis. Proin tincidunt, diam porta pretium fringilla, tellus arcu pretium purus, vitae posuere neque arcu sit amet nisl. Aliquam ultrices vehicula ex. "
        />
        <AboutActivities
            bg= {bg} 
            headingcolor="white" 
            pic={pic2} heading = "Activity" 
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dapibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel semper ligula, a dictum felis. Sed efficitur mi lacinia, tempus est et, tempus felis. Proin tincidunt, diam porta pretium fringilla, tellus arcu pretium purus, vitae posuere neque arcu sit amet nisl. Aliquam ultrices vehicula ex. "
         />
          <AboutActivities
            headingcolor="var(--primary-dark)" 
            contentcolor="var(--info-text-color)" 
            pic={pic3} heading = "Activity" 
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dapibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel semper ligula, a dictum felis. Sed efficitur mi lacinia, tempus est et, tempus felis. Proin tincidunt, diam porta pretium fringilla, tellus arcu pretium purus, vitae posuere neque arcu sit amet nisl. Aliquam ultrices vehicula ex. "
        />
         <AboutActivities
            bg= {bg2} 
            headingcolor="white" 
            pic={pic2} heading = "Activity" 
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dapibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel semper ligula, a dictum felis. Sed efficitur mi lacinia, tempus est et, tempus felis. Proin tincidunt, diam porta pretium fringilla, tellus arcu pretium purus, vitae posuere neque arcu sit amet nisl. Aliquam ultrices vehicula ex. "
         />
         </div>
        // <FAB />
    );
}
 
export default Activities;