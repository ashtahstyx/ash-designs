import axios from 'axios';

const key = '19dc3f8016b340ce963c6e828f749d15';
const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

const getGenreList = () => axiosInstance.get(`/genres?key=${key}`);
const getAllGames = () => axiosInstance.get(`/games?key=${key}`);

export default {
  getGenreList,
  getAllGames,
};
