import React  from 'react'
import './Card.css'

export default function Card(props) {
  const name=props.name;
  const imageurl=props.imageurl;
  const position=props.position;
  const quote = props.quote
      return (
        <div className="card">
          <div className="flipCard">
        <div className="flipCard-inner">
          <div className="flipCard-front">
            <img src={imageurl} alt="Jane"></img>
            <div className="container">
            <center><div className="divider">
                <span></span>
              </div></center>
              <div>
              <h2 className="cardName">{name}</h2>
              <p className="cardTitle">{position}</p>
              </div>
            </div>
          </div>

          <div className="flipCard-back">
            <center><div className="divider-top">
              <span></span>
            </div></center>
            <p className="quoteText">{quote}</p>
            <center><div className="divider-bottom">
              <span></span>
            </div></center>
            <center><button className="knowMoreBtn">Know More</button></center>
          </div>
        </div>
    </div>
        </div>
    // <div class="card">

    //                         <img src={imageurl} alt="Jane"></img>

    //                         <div class="container">

    //                                 <div class="divider">

    //                                     <span></span>

    //                                 </div>

    //                             <h2 class="cardName">Jane Doe</h2>

    //                             <p class="cardTitle">CEO and Founder</p>

    //                         </div>

    //                 </div>
      
    );
  }
 