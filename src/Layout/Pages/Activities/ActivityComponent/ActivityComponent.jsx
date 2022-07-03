import './ActivityComponent.css';
import Picture3 from '../../../../assets/villager.png';

const ActivityComponent = (props) => {

    return (
        <section className='page2Component'>
            <div className="componentContainer">
                <div className="leftComp">
                    <h1 className='leftHeadingMobile'>Education Campaign</h1>
                    <div className="rightComp">
                        <img src={Picture3} alt="" />
                    </div>
                    <div className="contentComp">
                        <h1 className='leftHeadingComp'>Education Campaign</h1>
                        <h2 className='QuoteComp'><q>A pen, book & mentor can change the world.</q></h2>
                        <p className='leftContentComp'>We strongly believe that education opens the doors for innumerable opportunities, but sadly not all children out there get it. To be their mentor and guide was an amazing opportunity for us because - “Jab padhega India tabhi toh badhega India.” We at Khayaal are teaching more than 75 students currently, starting from basic subjects like English and Math to important lessons such as morals and ethical values! <br /><br /><b>Team-Khayaal is putting all the effort to make their future brighter and better.</b></p>
                    </div>
                </div>

                <table><tbody><tr>
                    <td className='divider-row1' >&nbsp;</td>
                    <td className='divider-row2'>Other Activities</td>
                    <td className='divider-row3' >&nbsp;</td>
                </tr><tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr></tbody></table>

                <div className="activity-divider"></div>

                <div className="sectionContent">
                    <h1 className='sectionHeading'>Other Activities</h1>
                </div>

            </div>
        </section>

    );
}

export default ActivityComponent;
