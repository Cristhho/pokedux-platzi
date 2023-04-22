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
    case 'SET_FAVORITE':
      const newPokemons = [...state.pokemons];
      const pokeIndex = newPokemons.findIndex((_poke) => _poke.id === action.payload);
      if (!pokeIndex)
        return state;

      newPokemons[pokeIndex].favorite = !newPokemons[pokeIndex].favorite;
      return {
        ...state,
        pokemons: newPokemons
      }
    default:
      return state;
  }
}
