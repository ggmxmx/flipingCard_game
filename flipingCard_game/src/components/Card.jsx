import React from 'react';
import './Card.css';
import cardBack from '../images/cardBack.jpg';

function Card({ image, onClick, isFlipped }) {
  return (
    <div className={`card-border ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={cardBack} alt="card back" />
        </div>
        <div className="card-back">
          <img src={image} alt="card front" />
        </div>
      </div>
    </div>
  );
}

export default Card;

