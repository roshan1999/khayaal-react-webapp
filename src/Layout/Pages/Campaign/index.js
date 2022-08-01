import React from 'react';
import './style.css';
import EducationCampaign from './EducationCampaign';
import ActivitySeperator from './ActivitySeperator';
import ActivityButton from './ActivityButton';
import BannerBg from './BannerBg';

const Campaign = () => {
    return (
        <div className="main-activity-page">
            <EducationCampaign />
            <ActivitySeperator />
            <ActivityButton />
            <BannerBg />
        </div>
    );
}

export default Campaign;