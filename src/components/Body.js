import React, { useState, useEffect } from 'react';
import { getCards, getCardByTitle } from '../services/api';

const Body = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all cards initially
    const fetchCards = async () => {
      try {
        const data = await getCards();
        setCards(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCards();
  }, []);

  const handleSearch = async () => {
    try {
      const data = searchTerm ? [await getCardByTitle(searchTerm)] : await getCards();
      setCards(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="main-content1">
        <h1>How can we help?</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            &#10132;
          </button>
        </div>
      </div>
      
      <main className="main-content">
  {error && <p style={{ color: 'red' }}>{error}</p>}
  {cards.length > 0 ? (
    <div className="topics-container">
      <div className="topics">
        {cards.slice(0, 2).map((card) => ( // First row (first two cards)
          <div key={card.id} className="topic">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="topics">
        {cards.slice(2, 4).map((card) => ( // Second row (next two cards)
          <div key={card.id} className="topic">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="topics">
        {cards.slice(4, 6).map((card) => ( // Third row (last two cards)
          <div key={card.id} className="topic">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p>No cards found.</p>
  )}
</main>





    </>
  );
};

export default Body;
