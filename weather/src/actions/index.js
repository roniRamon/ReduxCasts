import axios from 'axios';

const API_KEY = '3558d0578b711780c48ce01215ba98a7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather= (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return ({
    type: FETCH_WEATHER,
    payload: request
  });
};
