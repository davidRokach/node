import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

//  send to the server user and get back token
export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const singup = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, user);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const EditUser = async (id, user) => {
  try {
    const { data } = await axios.put(`${apiUrl}/users/${id}`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const GetUsers = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/users`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const changeBusinessStatus = async (id) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/users/${id}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const DeleteUser = async (id) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/users/${id}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getUserApi = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/users/${id}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
