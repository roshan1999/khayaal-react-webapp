import React from 'react';
import './style.css';
import { campaignBannerImages } from '../../../../images';

const EducationCampaign = () => {
    return (
        <div className="main-activity-banner">
            <div className="top-image-container">
                <img src={campaignBannerImages[0]} alt="Education Campaign Image" />
            </div>
            <div className="top-heading">
                <p>Education Campaign</p>
            </div>
            <div className="top-subheading">
                <p>"A pen, book & mentor can change the world."</p>
            </div>
            <div className="top-paragraph">
                <p>We strongly believe that education opens the doors for innumerable opportunities,
                    but sadly not all children out there get it.
                    To be their mentor and guide was an amazing opportunity for us because -
                    “Jab padhega India tabhi toh badhega India.”
                    We at Khayaal are teaching more than 75 students currently,
                    starting from basic subjects like English and Math to important lessons such as
                    morals and ethical values!<br /> <br />
                    <b> Team - Khayaal is putting all the effort to make their future brighter and better</b></p>
            </div>
        </div>
    );
}

export default EducationCampaign;