import { FC } from 'react';
import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { IPokemon } from '../api';
import { StarButton } from './StarButton';
import { setFavorite } from '../actions';

type PokemonCardProps = {
  pokemon: IPokemon
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const dispatch = useDispatch<Dispatch<any>>();

  const onFavoriteClick = () => {
    dispatch(setFavorite(pokemon.id));
  }

  return (
    <Card
      title={`${pokemon.id ? pokemon.id + ': ' : ''}${pokemon.name}`}
      cover={<img src={pokemon.sprites?.front_shiny} alt={pokemon.name} />}
      extra={<StarButton isFavorite={pokemon.favorite} onClick={onFavoriteClick} />}
    >
      <Card.Meta description={pokemon.types.map((_type) => _type.type.name).join(',')} />
    </Card>
  );
}
