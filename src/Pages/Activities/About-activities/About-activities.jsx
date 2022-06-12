import './About-activities.css';

const AboutActivities = (props) => {
    return (
        <div className='top'>
            <section style={{ backgroundImage: `url(${props.bg})` }}>
                <div className="container">
                    <div className="left">
                        <img src={props.pic} alt="" />
                    </div>
                    <div className="right">
                        <div className="content">
                            <h1 style={{ color: props.headingcolor }}>{props.heading}</h1>
                            <span style={{ color: props.contentcolor }}>{props.description}</span><br />
                            <p style={{ color: props.contentcolor }}>{props.seconddescription}</p><br />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default AboutActivities;
