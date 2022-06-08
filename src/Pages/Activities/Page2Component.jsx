import './Page2Component.css';
import Picture3 from '../../assets/villager.png';

const Page2Component = (props) => {

    return (
        <section className='page2Component'>
            <div className="componentContainer">
            <div className="leftComp">
                <div className="contentComp">
                    <h1 className='leftHeadingComp'>Activity</h1>
                    <p className='leftContentComp'>About the Picture</p>
                </div>
            </div> 
            <div className="rightComp">
                <img src={Picture3} alt="" />
            </div>
        </div>
        </section>
        
    );
}
 
export default Page2Component;