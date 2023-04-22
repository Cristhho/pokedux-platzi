import { IPokemon } from '../api';

export type PokemonActions = {type: 'SET_POKEMONS', payload: IPokemon[]}