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
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=045875faf6500e2b08e352de604e5d85`
    );
    const {data} = output
    dispatch({ type: GET_WEATHER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_WEATHER_FAILURE, payload: error.message });
  }
};
