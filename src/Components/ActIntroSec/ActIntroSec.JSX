import sh from '../../assets/sh.png'
import './ActIntroSec.css'

const ActIntroSec = (props) => {
    return (

        <div class="actintro">
              <h1 className="actinth">{props.actIntro}</h1>
              <img className= "actintsh" src={sh} alt="a better tomorrow"></img>
              <p class="actintpara">{props.actIntroPara}</p>
                <p className="actintpara">{props.actIntroSubPara}</p>

          </div>

      );
}
 
export default ActIntroSec;