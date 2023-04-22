import { Col, Layout, Row } from 'antd';

import { PokemonList, Searcher } from './components';

const  App = () => {
  return (
    <Layout.Content style={{ paddingTop: '1.5rem' }}>
      <Row>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
      </Row>
      <PokemonList pokemons={Array(10).fill('')} />
    </Layout.Content>
  );
}

export default App;
