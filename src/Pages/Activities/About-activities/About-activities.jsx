import './About-activities.css';

const AboutActivities = (props) => {
    return (
        <div className='top'>
            <section style={{ backgroundImage: `url(${props.bg})` }}>
                <div className="container">
                    <div className="left">
                        <img src={props.pic} alt="" />
                    </div>
                    <div className="right" style={{ color: props.color }}>
                        <div className="content">
                            <h1>{props.heading}</h1>
                            <p>{props.description}</p><br />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default AboutActivities;