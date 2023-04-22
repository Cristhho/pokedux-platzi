import { IPokemon } from '../api';
import { PokemonActions } from '../actions/types';

export interface RootState {
  pokemons: IPokemon[]
}

const initialState: RootState = {
  pokemons: []
}

export const pokemonsReducer = (state = initialState, action: PokemonActions) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload
      }
    default:
      return state;
  }
}
