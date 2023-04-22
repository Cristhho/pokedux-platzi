import axios from "axios";

export interface IPokemon {
  name: string,
  url: string,
}
interface PokemonsResponse {
  results: IPokemon[]
}
export const getPokemons = () => {
  return axios.get<PokemonsResponse>('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.data.results);
}