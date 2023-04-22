import { FC } from 'react';

import { PokemonCard } from './PokemonCard';
import { IPokemon } from '../api';

type PokemonListProps = {
  pokemons: IPokemon[]
}

export const PokemonList: FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem',
      margin: '3rem',
      padding: '0 3rem 3rem'
    }}>
      {pokemons.map((pokemon, index) => {
        return <PokemonCard key={index} pokemon={pokemon} />;
      })}
    </div>
  );
}
