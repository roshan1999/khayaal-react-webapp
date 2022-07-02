import './ActivitySections.css';

const ActivitySections = (props) => {

    return (
       <section className='Page3Component'>
        <div className="sectionContainer">
            {/* <div className="sectionContent">
                <h1 className='sectionHeading'>Other Activities</h1>
            </div> */}
            <div className="activityCardComponent">
                {/* <div className="activityCard">
                    <h1 className='activityCardName1'>Covid Taskforce</h1>
                </div>
                <div className="activityCard">
                    <h1 className='activityCardName2'>Donation Drive</h1>
                </div>
                <div className="activityCard">
                    <h1 className='activityCardName3'>Women of Khayaal</h1>
                </div>
                <div className="activityCard">
                    <h1 className='activityCardName4'>Feed the paws</h1>
                </div> */}
                <a className='activityCard blurimg1' href="#covid">Covid Taskforce</a>
                <a className='activityCard blurimg2' href="#donation">Donation Drive</a>
                <a className='activityCard blurimg1' href="#women">Women of Khayaal</a>
                <a className='activityCard blurimg3' href="#feed">Feed the paws</a>
            </div>
        </div>
       </section>
    );
}

export default ActivitySections;