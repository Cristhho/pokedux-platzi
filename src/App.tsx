import { useState } from 'react';
import { Col, Layout, Row } from 'antd';

import { PokemonList, Searcher } from './components';
import { useEffect } from 'react';
import { IPokemon, getPokemons } from './api';

const  App = () => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemons();
        setPokemonList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokemons();
  }, []);

  return (
    <Layout.Content style={{ paddingTop: '1.5rem' }}>
      <Row>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
      </Row>
      <PokemonList pokemons={pokemonList} />
    </Layout.Content>
  );
}

export default App;
