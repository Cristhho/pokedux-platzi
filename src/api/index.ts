import axios from "axios";

interface IPokemonSprite {
  front_shiny: string
}
interface IPokemonType {
  type: {
    name: string
  }
}
export interface IPokemon {
  name: string,
  id: number,
  sprites: IPokemonSprite,
  types: IPokemonType[],
  favorite: boolean
}
export interface FastPokemon {
  name: string,
  url: string,
}
interface PokemonsResponse {
  results: FastPokemon[]
}
export const getPokemons = () => {
  return axios.get<PokemonsResponse>('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.data.results);
}
export const getPokemonDetails = (pokemon: FastPokemon) => {
  return axios.get<IPokemon>(pokemon.url!)
    .then((res) => res.data);
}