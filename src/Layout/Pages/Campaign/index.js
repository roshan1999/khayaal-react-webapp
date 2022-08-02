import React from 'react';
import './style.css';
import EducationCampaign from './EducationCampaign';
import ActivitySeperator from './ActivitySeperator';
import ActivityButton from './ActivityButton';
import BannerBg from './BannerBg';
import { getActivities } from '../../../constants/ActivitiesConstants.js';
import { useRef } from 'react';
import CampaignFab from './CampaignFab';

const Campaign = () => {
    const activities = getActivities();
    console.log(activities);
    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const fourthRef = useRef();
    const scrollToDiv = (ref) => {
        let top = ref === secondRef ? ref.current.offsetTop - 500 : ref.current.offsetTop - 100;
        window.scrollTo({ behavior: "smooth", left: 0, top: top })
    };
    return (
        <div className="main-activity-page">
            <EducationCampaign />
            <ActivitySeperator />
            <ActivityButton click={scrollToDiv} reference={[firstRef, secondRef, thirdRef, fourthRef]} />
            <BannerBg activatedBg="true" activity={activities[0]} reference={firstRef} /> :
            <div className="divider-line"></div>
            <BannerBg activatedBg="false" activity={activities[1]} reference={secondRef} />
            <div className="divider-line" style = {{paddingBottom: "50px"}}></div>
            <BannerBg activatedBg="true" rotateBg="true" activity={activities[2]} reference={thirdRef} />
            <div className="divider-line" style = {{marginBottom: "15px"}}></div>
            <BannerBg activatedBg="false" activity={activities[3]} reference={fourthRef} />
            <div className="divider-line"></div>
            <CampaignFab />
        </div>
    );
}

export default Campaign;