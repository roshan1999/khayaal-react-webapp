import './ActivityPage.css';

const ActivityPage = (props) => {

    return (
        <section className='page1'>
            <div className="container">
            <div className="left">
                <img src={props.Picture} alt="" />
            </div>
            <div className="right">
                <div className="content">
                    <h1 className='rightHeading'>{props.heading}</h1>
                    <p className='rightContent'>{props.body}</p>
                </div>
            </div>
        </div>
        </section>
        
    );
}
 
export default ActivityPage;