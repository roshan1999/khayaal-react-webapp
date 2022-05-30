import './ActivityPage2.css';

const ActivityPage2 = (props) => {

    return (
        <section className='page2'>
            <div className="container2">
            <div className="left2">
                <div className="content2">
                    <h1 className='leftHeading'>{props.heading2}</h1>
                    <p className='leftContent'>{props.body2}</p>
                </div>
            </div> 
            <div className="right2">
                <img src={props.Picture2} alt="" />
            </div>
        </div>
        </section>
        
    );
}
 
export default ActivityPage2;