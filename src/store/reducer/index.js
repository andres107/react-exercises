import { combineReducers } from 'redux'

import pokemons from '../../services/reducers/pokemons.js'

export const rootReducer = combineReducers({
  pokemons
// Here must be the reducers
});

export default rootReducer;
