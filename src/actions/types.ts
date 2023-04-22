import { IPokemon } from '../api';

export type PokemonActions = 
  {type: 'SET_POKEMONS', payload: IPokemon[]}
  | {type: 'SET_LOADING', payload: boolean}