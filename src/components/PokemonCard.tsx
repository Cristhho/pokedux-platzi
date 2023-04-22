import { FC } from 'react';
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';

export const PokemonCard: FC = () => {
  return (
    <Card
      title='Ditto'
      cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' alt='Ditto' />}
      extra={<StarOutlined />}
    >
      <Card.Meta description='fire, magic' />
    </Card>
  );
}
