import axios from 'axios';

const key = import.meta.env.VITE_RAWG_API_KEY;

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

const getGenreList = () => axiosInstance.get(`/genres?key=${key}`);
const getAllGames = () => axiosInstance.get(`/games?key=${key}`);
const getGamesByGenre = (genreId: number) =>
  axiosInstance.get(`/games?genres=${genreId}&key=${key}`);

export default {
  getGenreList,
  getAllGames,
  getGamesByGenre,
};
