import { Col, Layout, Row, Typography } from 'antd';

import { Searcher } from './components';

const  App = () => {
  return (
    <Layout.Content style={{ paddingTop: '1.5rem' }}>
      <Typography.Title level={3}>
        Pokedux
      </Typography.Title>
      <Row>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
      </Row>
    </Layout.Content>
  );
}

export default App;
