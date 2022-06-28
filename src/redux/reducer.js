import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "./actionType";
const weatherData = {
  data: {},
  isLoading: false,
  isError: false,
};

export const reducer = (state = weatherData, { type, payload }) => {
  switch (type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
