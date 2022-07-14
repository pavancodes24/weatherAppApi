import axios from "axios";
import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "./actionType";

export const getWeatherData = (city) => async (dispatch) => {
  try {
    dispatch({ type: GET_WEATHER_REQUEST });
    const output = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0351df5a5b7959119c0e2a21e5eb7862`
    );
    const {data} = output
    dispatch({ type: GET_WEATHER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_WEATHER_FAILURE, payload: error.message });
  }
};
