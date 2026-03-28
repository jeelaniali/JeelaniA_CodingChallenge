import axios from "axios";

// Base URL for backend
const BASE_URL = "http://localhost:8080/api/players";

// Get all players
export const getAllPlayers = () => {
  return axios.get(BASE_URL);
};

export const getPlayersByTeam = (teamName) => {
  return axios.get(`${BASE_URL}/team/${teamName}`);
};

// Add new player
export const addPlayer = (player) => {
  return axios.post(BASE_URL, player);
};

export const updatePlayer = (id, player) => {
  return axios.put(`${BASE_URL}/${id}`, player);
};

// Delete player
export const deletePlayer = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

