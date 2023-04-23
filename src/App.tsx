import { FC, useEffect } from 'react';
import { Col, Layout, Row, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { PokemonList, Searcher } from './components';
import { Dispatch } from 'redux';
import { fetchPokemons } from './slices/pokemonSlice';
import { RootState } from './store';

type PropsFromRedux = {};

const loader = (
  <Row>
    <Col offset={12}>
      <Spin />
    </Col>
  </Row>
);

const App: FC<PropsFromRedux> = () => {
  const pokemons = useSelector((state: RootState) => state.pokemon.pokemons, shallowEqual);
  const loading = useSelector((state: RootState) => state.ui.loading);
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <Layout.Content style={{ paddingTop: '1.5rem' }}>
      <Row>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
      </Row>
      {
        loading ? loader : (
          <PokemonList pokemons={pokemons} />
        )
      }
    </Layout.Content>
  );
}

export default App;
