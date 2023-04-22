import { IPokemon } from '../api';
import { PokemonActions } from '../actions/types';

export interface RootState {
  loading: boolean;
  pokemons: IPokemon[];
}

const initialState: RootState = {
  loading: false,
  pokemons: []
}

export const pokemonsReducer = (state = initialState, action: PokemonActions): RootState => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}
