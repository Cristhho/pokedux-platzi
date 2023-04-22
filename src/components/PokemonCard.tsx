import { FC } from 'react';
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';

import { IPokemon } from '../api';

type PokemonCardProps = {
  pokemon: IPokemon
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <Card
      title={`${pokemon.index ? pokemon.index + ': ' : ''}${pokemon.name}`}
      cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' alt={pokemon.name} />}
      extra={<StarOutlined />}
    >
      <Card.Meta description='fire, magic' />
    </Card>
  );
}
