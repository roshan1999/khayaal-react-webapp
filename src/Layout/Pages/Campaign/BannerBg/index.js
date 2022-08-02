import bgImg from '../../../../assets/activity/activity-bg-1.png';
import { useMediaQuery } from 'react-responsive';


import './style.css';

const BannerBg = (props) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 673px)' })

    return (
        <div ref={props.reference} className="banner-bg-parent-container">
            {props.activatedBg === "true" ?
                <img src={bgImg} alt="khayaal-background"
                    style={props.rotateBg === "true" && !isMobileScreen ?
                        { transform: "rotateY(180deg)" }
                        : null} />
                : null}
            <div className="heading-image-container">
                <img src={props.activity.image} alt="activity" />
            </div>
            <div className="activities-description" >
                <div className="heading"
                    style={
                        props.activatedBg === "false" ?
                            {
                                color: "var(--primary-text-color)"
                            } :
                            null
                    }>
                    {props.activity.heading}
                </div>
                <div className="subheading"
                    style={
                        props.activatedBg === "false" ? {
                            color: "var(--info-secondary-color)"
                        } : null}>
                    <q>{props.activity.subheading}</q>
                </div>
                <div className="paragraph"
                    style={
                        props.activatedBg === "false" ? {
                            color: "var(--info-secondary-color)"
                        } : null}>
                    <p style={{ marginBottom: 0 }}>
                        {props.activity.paragraph}
                    </p>
                </div>
            </div>
        </div >
    );
}
export default BannerBg;