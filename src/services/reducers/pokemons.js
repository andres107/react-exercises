import * as types from "../constants/pokemons.js";

const initialState = {
  selected: null,
  data: [],
  isFetching: false,
  count: 0,
  next: null,
  previous: null,
  error: {
    type: null,
    status: null,
    message: null
  }
};

export const pokemons = (state = initialState, action) => {
  const { meta, payload } = action;

  if(action.error) {
    switch(action.type){
     case `${types.POKEMONS_FETCH}_REJECTED`:
       return {
         ...state,
         error: {
           type: 'fetch',
           status: payload.response.status,
           message: payload.response.message ? payload.response.message : null
         }
       };
     case `${types.POKEMON_FETCH}_REJECTED`:
       return {
         ...state,
         error: {
           type: 'fetch one pokemon',
           status: payload.response.status,
           message: payload.response.message ? payload.response.message : null
         }
       };
     default:
       return {...state};
    }
  }

  switch(action.type) {
    case types.POKEMON_REMOVE:
      return {
        ...state,
        data: state.data.filter(item => item.name !== meta )
      };
    case `${types.POKEMONS_FETCH}_PENDING`:
      return {
        ...state,
        isFetching: true,
        error: {
          type: null,
          status: null,
          message: null
        }
      };
    case `${types.POKEMONS_FETCH}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        data: Array.from( payload.data.results, (item) => {
          return {
            ...item,
            id: item.url.match(/\/[0-9]+\//g)[0].replace(/\//g, '')
          };
        }),
        count: payload.data.count,
        next: payload.data.next,
        previous: payload.data.previous,
        error: {
          type: null,
          status: null,
          message: null
        }
      };
    case `${types.POKEMON_FETCH}_PENDING`:
      return {
        ...state,
        isFetching: true,
        error: {
          type: null,
          status: null,
          message: null
        }
      };
    case `${types.POKEMON_FETCH}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        selected: payload.data,
        error: {
          type: null,
          status: null,
          message: null
        }
      };
    default:
      return {...state};
  }
};

export default pokemons;
