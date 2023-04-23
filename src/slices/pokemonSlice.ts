import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IPokemon, getPokemonDetails, getPokemons } from '../api';
import { setLoading } from './uiSlice';

export interface PokemonState {
  pokemons: IPokemon[],
  filteredPokemons: IPokemon[],
}

const initialState: PokemonState = {
  pokemons: [],
  filteredPokemons: []
}

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async (_, {dispatch}) => {
    dispatch(setLoading(true));
    try {
      const data = await getPokemons();
      const pokemonsDetailed = await Promise.all(data.map((pokemon) => getPokemonDetails(pokemon)));
      dispatch(setPokemons(pokemonsDetailed));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state, actions: PayloadAction<IPokemon[]>) => {
      state.pokemons = actions.payload
    },
    setFavorite: (state, actions: PayloadAction<number>) => {
      const pokeIndex = state.pokemons.findIndex((_poke) => _poke.id === actions.payload);
      if (pokeIndex >= 0) {
        const isFav = state.pokemons[pokeIndex].favorite;
        state.pokemons[pokeIndex].favorite = !isFav;
      }
    },
    setFilteredPokemons: (state, actions) => {
      state.filteredPokemons = actions.payload;
    }
  }
});

export const { setPokemons, setFavorite, setFilteredPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
