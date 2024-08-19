import axios from 'axios';

// Set the base URL for the API
const API_URL = 'https://card-api-rqrz.onrender.com/api'; 
// const API_URL = 'http://localhost:5000/api';

// Function to get all cards
export const getCards = async () => {
  try {
    const response = await axios.get(`${API_URL}/cards`);
    console.log('response data -',response)
    return response.data;
   
  } catch (error) {
    console.error('Error fetching cards:', error);

    throw error;
  }
};

// Function to get a card by title
export const getCardByTitle = async (title) => {
  try {
    const response = await axios.get(`${API_URL}/cards/${title}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching card with title ${title}:`, error);
    throw error;
  }
};

// Function to create a new card
export const createCard = async (card) => {
  try {
    const response = await axios.post(`${API_URL}/cards`, card);
    return response.data;
  } catch (error) {
    console.error('Error creating card:', error);
    throw error;
  }
};
