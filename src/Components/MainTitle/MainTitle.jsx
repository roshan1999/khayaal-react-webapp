import './MainTitle.css'

const MainTitle = (props) => {
    return ( 
        <div className="main-heading">
            <h1 className='main-HeadingText'>{props.headingText}</h1>
        </div>
     );
}
 
export default MainTitle;
