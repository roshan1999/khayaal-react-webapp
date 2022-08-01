import khayaalActivity2 from '../../../../assets/activity/khayaal-activity-2.png';
import bgImg from '../../../../assets/activity/activity-bg-3.png';

import './style.css';

const BannerBg = () => {
    return (
        <div className="banner-bg-parent-container">
            <img src={bgImg} alt="" />
            <div className="heading-image-container">
                <img src={khayaalActivity2} alt="" />
            </div>
            <div className="activities-description" >
                <div className="heading" >
                    Covid Taskforce
                </div>
                <div className="subheading">
                    <q>A helping hand can save lives.</q>
                </div>
                <div className="paragraph">
                    <p>
                        When you are determined to help, it's surprising the things that you can do!" We wanted to support our nation in the tough times of the COVID-19 outbreak and thus we helped the patients to find medicines, hospitals, oxygen cylinders etc. according to their requirements.
                        <br />It was a tough time but we were glad to save so many lives.
                    </p>
                </div>
            </div>
        </div >
    );
}
export default BannerBg;