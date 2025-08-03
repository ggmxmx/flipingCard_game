import React, { useState, useEffect } from "react";
import Card from "./Card"
import './Card.css';
import initialCards from "../items";

// Function to shuffle the cards array
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function CardsContainer() {
  const [cards, setCards] = useState(shuffleArray(initialCards));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex].id === cards[secondIndex].id) {
        setMatchedCards((prev) => [...prev, cards[firstIndex].id]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (matchedCards.length === initialCards.length / 2) {
      setIsGameWon(true);
    }
  }, [matchedCards]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || isCardMatched(cards[index].id)) {
      return;
    }
    setClickCount(prev => prev + 1);
    setFlippedCards((prev) => [...prev, index]);
  };

  const isCardFlipped = (index) => {
    return flippedCards.includes(index) || isCardMatched(cards[index].id);
  };

  const isCardMatched = (id) => {
    return matchedCards.includes(id);
  };

  const handleRestart = () => {
    setCards(shuffleArray(initialCards));
    setFlippedCards([]);
    setMatchedCards([]);
    setClickCount(0);
    setIsGameWon(false);
  };

  return (
    <div className="cards-fields">
      <h2>عدد الضغطات: {clickCount}</h2>
      {isGameWon && <h2 className="win-message">You Won!</h2>}
      <button onClick={handleRestart} className="restart-button">Restart Game</button>
      <div className="cards-container">
        {cards.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            isFlipped={isCardFlipped(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsContainer;

