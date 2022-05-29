import React, { Component } from 'react'
import Person from '../../assets/person.png';
import './Card.css'

export default function Card(props) {
  const name=props.name;
  const imageurl=props.imageurl;
  const position=props.position;
  const quote = props.quote

    return (
      <div className="card">
                        <img src={imageurl} alt="Jane"></img>
                        <div className="container">
                                <div className="divider">
                                    <span></span>
                                </div>
                            <h2 className="cardName">{name}</h2>
                            <p className="cardTitle">{position}</p>
                        </div>
                </div>
    );
  }
 