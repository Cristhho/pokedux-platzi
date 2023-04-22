import { FC, useEffect } from 'react';
import { Col, Layout, Row, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { PokemonList, Searcher } from './components';
import { IPokemon, getPokemons } from './api';
import { getPokemonWithDetails, setLoading } from './actions';
import { RootState } from './reducers/pokemons';
import { Dispatch } from 'redux';

type PropsFromRedux = {};

const loader = (
  <Row>
    <Col offset={12}>
      <Spin />
    </Col>
  </Row>
);

const App: FC<PropsFromRedux> = () => {
  const pokemons = useSelector<RootState, IPokemon[]>((state) => state.pokemons);
  const loading = useSelector<RootState, boolean>((state) => state.loading);
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      try {
        const data = await getPokemons();
        dispatch(getPokemonWithDetails(data));
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(setLoading(false));
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
      {
        loading ? loader : (
          <PokemonList pokemons={pokemons} />
        )
      }
    </Layout.Content>
  );
}

export default App;
