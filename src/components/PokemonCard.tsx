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
      title={`${pokemon.id ? pokemon.id + ': ' : ''}${pokemon.name}`}
      cover={<img src={pokemon.sprites?.front_shiny} alt={pokemon.name} />}
      extra={<StarOutlined />}
    >
      <Card.Meta description={pokemon.types.map((_type) => _type.type.name).join(',')} />
    </Card>
  );
}
