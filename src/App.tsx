import { FC, useEffect } from 'react';
import { Col, Layout, Row } from 'antd';
import { connect, ConnectedProps } from 'react-redux';

import { PokemonList, Searcher } from './components';
import { getPokemons } from './api';
import { RootState } from './reducers/pokemons';
import { setPokemons } from './actions';

const mapState = (state: RootState) => ({
  pokemons: state.pokemons
});
const mapDispatch = {
  setPokemons
};
const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>;

const App: FC<PropsFromRedux> = ({ pokemons, setPokemons }) => {
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemons();
        setPokemons(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokemons();
  }, [setPokemons]);

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

export default connector(App);
