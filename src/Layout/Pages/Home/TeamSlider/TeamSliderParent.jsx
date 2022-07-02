import TeamSlider from './TeamSlider';
import './TeamSliderParent.css';
import { getMembers } from '../../../../constants/TeamSliderConstants';

export default function () {
    return (
        <div className="team-parent-container">
            <div className="team-parent-header-container">
                <h1>Meet Our Team</h1>
            </div>
            <TeamSlider slides={getMembers()} />
        </div>
    )
}