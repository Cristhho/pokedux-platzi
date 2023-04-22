import { AnyAction, Dispatch } from 'redux';

import { FastPokemon, IPokemon, getPokemonDetails } from '../api';
import { PokemonActions } from './types';

export const setPokemons = (payload: IPokemon[]): PokemonActions => ({
  type: 'SET_POKEMONS',
  payload
});

export const getPokemonWithDetails = (pokemons: FastPokemon[]) => async (dispatch: Dispatch<AnyAction>) => {
  const pokemonsDetailed = await Promise.all(pokemons.map((pokemon) => getPokemonDetails(pokemon)));
  dispatch(setPokemons(pokemonsDetailed));
}