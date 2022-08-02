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
            {activities.map((curr, index) => {
                return (
                    <div key={index}>
                        {index % 2 === 0 ?
                            (index === 2 ?
                                <BannerBg activatedBg="true" rotateBg="true" activity={curr} /> :
                                <BannerBg activatedBg="true" activity={curr} />
                            ) :
                            <BannerBg activatedBg="false" activity={curr} />
                        }
                        {index < activities.length ? <div className="divider-line"></div> : null}
                    </div>
                )
            })}
        </div>
    );
}

export default Campaign;