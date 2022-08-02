import './style.css';
import Arrow from '../../../../assets/Campaign/arrow-up.png';

const CampaignFab = () => {
    return (
        <div className="campaign-fab-container">
            <button className="campaign-fab"
                onClick={() => {
                    window.scrollTo({ behavior: "smooth", left: 0, top: 0 })
                }}>
                <img src={Arrow} alt="arrow-icon" />
            </button>
        </div>
    )
}

export default CampaignFab;