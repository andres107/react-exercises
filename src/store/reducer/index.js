import { combineReducers } from 'redux'

import pokemons from '../../services/reducers/pokemons.js';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  pokemons,
  form: formReducer
// Here must be the reducers
});

export default rootReducer;
