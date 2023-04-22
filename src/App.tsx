import { FC, useEffect } from 'react';
import { Col, Layout, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { PokemonList, Searcher } from './components';
import { IPokemon, getPokemonDetails, getPokemons } from './api';
import { setPokemons } from './actions';
import { RootState } from './reducers/pokemons';

type PropsFromRedux = {};

const App: FC<PropsFromRedux> = () => {
  const pokemons = useSelector<RootState, IPokemon[]>((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemons();
        const pokemonsDetailed = await Promise.all(data.map((pokemon) => getPokemonDetails(pokemon)));
        dispatch(setPokemons(pokemonsDetailed));
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokemons();
  }, [dispatch]);

  return (
    <Layout.Content style={{ paddingTop: '1.5rem' }}>
      <Row>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
      </Row>
      <PokemonList pokemons={pokemons} />
    </Layout.Content>
  );
}

export default App;
