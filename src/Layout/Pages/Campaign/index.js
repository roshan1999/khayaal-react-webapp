import React from 'react';
import './style.css';
import EducationCampaign from './EducationCampaign';
import ActivitySeperator from './ActivitySeperator';
import ActivityButton from './ActivityButton';
import BannerBg from './BannerBg';
import { getActivities } from '../../../constants/ActivitiesConstants.js';

const Campaign = () => {
    const activities = getActivities();
    console.log(activities);
    return (
        <div className="main-activity-page">
            <EducationCampaign />
            <ActivitySeperator />
            <ActivityButton />
            <BannerBg activatedBg="true" rotateBg="true" activity={activities[0]}/> :
            <div className="divider-line"></div>
            <BannerBg activatedBg="false" activity={activities[1]}/>
            <div className="divider-line"></div>
            <BannerBg activatedBg="true" rotateBg="true" activity={activities[2]}/>
            <div className="divider-line"></div>
            <BannerBg activatedBg="false" activity={activities[3]}/>
            <div className="divider-line"></div>
        </div>
    );
}

export default Campaign;