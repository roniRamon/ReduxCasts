import { FETCH_WEATHER } from '../actions/index';

const WeatherReducer = (state = [], action) => {
  //Object.freeze(state);
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }
  return state;
};


export default WeatherReducer;
