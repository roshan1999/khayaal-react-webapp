import MainTitle from '../../Components/MainTitle/MainTitle';
import ActIntroSec from '../../Components/ActIntroSec/ActIntroSec'
import ActivityPage from './ActivityPage/ActivityPage'
import ActivityPage2 from './ActivityPage2/ActivityPage2'
import FAB from '../Floating-Button/FAB'
import Picture from "../../assets/image39.png";
import Picture2 from "../../assets/image34.png";
import Picture3 from "../../assets/image37.png";
import Picture4 from "../../assets/image38.png";
import './Activities.css'

const Activities = () => {
    const intro="A beautiful thought can change the world. The last time you told someone it's going to be okay? Yes. That. This community is formed by a group of young individuals, who care about the future of this society."
    return (
        <div className="activitycontainer">
            <MainTitle headingText="Activities"></MainTitle>
            <ActIntroSec actIntro="A thought for" 
            actIntroPara={intro}
            actIntroSubPara="Coming from privileged backgrounds, we understand that there are various problems we never face but we know society as a whole is privy to. 
            We believe that a human is not made by the things he does for himself but by the things he is willing to do for others.  
            With all the love and care that we have, we want to bring a change in the lives of people, in any and every way possible."
            >
        </ActIntroSec>
        <ActivityPage 
        Picture={Picture}
        heading = "Education Campaign"
        body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec egestas sapien, et convallis augue. Pellentesque ut tortor pulvinar, iaculis felis ut, dapibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel semper ligula, a dictum felis. Sed efficitur mi lacinia, tempus est et, tempus felis. Proin tincidunt, diam porta pretium fringilla, tellus arcu pretium purus, vitae posuere neque arcu sit amet nisl. Aliquam ultrices vehicula ex. "
        ></ActivityPage>
        <ActivityPage2
        heading2 = "Covid-19 Force"
        body2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec egestas sapien, et convallis augue. Pellentesque ut tortor pulvinar, iaculis felis ut, dapibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel semper ligula, a dictum felis. Sed efficitur mi lacinia, tempus est et, tempus felis. Proin tincidunt, diam porta pretium fringilla, tellus arcu pretium purus, vitae posuere neque arcu sit amet nisl. Aliquam ultrices vehicula ex. "
        Picture2={Picture2}
        ></ActivityPage2>
         <ActivityPage 
        Picture={Picture3}
        heading = "Clothes Donation Drive"
        body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec egestas sapien, et convallis augue. Pellentesque ut tortor pulvinar, iaculis felis ut, dapibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel semper ligula, a dictum felis. Sed efficitur mi lacinia, tempus est et, tempus felis. Proin tincidunt, diam porta pretium fringilla, tellus arcu pretium purus, vitae posuere neque arcu sit amet nisl. Aliquam ultrices vehicula ex. "
        ></ActivityPage>
        <ActivityPage2
        heading2 = "Feed The Paws"
        body2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec egestas sapien, et convallis augue. Pellentesque ut tortor pulvinar, iaculis felis ut, dapibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel semper ligula, a dictum felis. Sed efficitur mi lacinia, tempus est et, tempus felis. Proin tincidunt, diam porta pretium fringilla, tellus arcu pretium purus, vitae posuere neque arcu sit amet nisl. Aliquam ultrices vehicula ex. "
        Picture2={Picture4}
        ></ActivityPage2>
        <FAB></FAB>
        </div>
    );
}
 
export default Activities;