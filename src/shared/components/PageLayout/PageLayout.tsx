import React, {FC} from 'react';
import {Col, Layout, Row} from 'antd';
import Header from '../Header';
import './styles.scss';

const PageLayout: FC = ({children}) => {
  return (
    <Layout className="layout">
      <Header />
      <Layout>
        <Layout.Content className="layout-content">
          <Row
            justify="space-between"
            gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
            className="mt-6 page"
          >
            <Col span={8}>{children}</Col>
          </Row>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
