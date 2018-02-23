import { combineReducers } from 'redux';
import WeatherReducer from './fetch_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
