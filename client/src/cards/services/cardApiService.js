import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const getCards = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getCard = async (cardId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const getMyCards = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/my-cards`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const creactCard = async (card) => {
  try {
    const { data } = await axios.post(`${apiUrl}/cards/`, card);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const editCard = async (id, card) => {
  try {
    const { data } = await axios.put(`${apiUrl}/cards/${id}`, card);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const changeLikesStatus = async (cardId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const deleteCard = async (id) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/${id}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const geocodingMaps = async (address) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address.houseNumber}+${address.street},${address.city},+${address.country}&key=key`
    );
    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
