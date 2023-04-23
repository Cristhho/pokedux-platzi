import { combineReducers } from 'redux';

import pokemonsReducer from '../slices/pokemonSlice';
import uiReducer from '../slices/uiSlice';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  ui: uiReducer
});

export default rootReducer;
