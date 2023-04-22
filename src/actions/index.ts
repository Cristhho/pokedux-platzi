import { IPokemon } from '../api';
import { PokemonActions } from './types';

export const setPokemons = (payload: IPokemon[]): PokemonActions => ({
  type: 'SET_POKEMONS',
  payload
})