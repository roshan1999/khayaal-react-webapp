import React from 'react';
import './style.css';
import EducationCampaign from './EducationCampaign';
import ActivitySeperator from './ActivitySeperator';
import ActivityButton from './ActivityButton';

const Campaign = () => {
    return (
        <div className="main-activity-page">
            <EducationCampaign />
            <ActivitySeperator />
            <ActivityButton />
        </div>
    );
}

export default Campaign;