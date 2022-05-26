import React, { Component } from 'react'
import Person from '../../assets/person.png';
import './Card.css'

export default function Card(props) {
    return (
      <div className="row">
        <div className="column">
          <div className="card leftcard">
            <img src={Person} alt="Jane"></img>
            <div className="container">
                <div className="divider">
                    <span></span>
                </div>
              <h2 className="cardName">Jane Doe</h2>
              <p className="cardTitle">CEO &amp; Founder</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
 