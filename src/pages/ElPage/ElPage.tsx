import React from 'react';
import scheme from './img/scheme.svg';
import SchemeSvg from './component/SchemeSvg';
import {Col, Row} from 'antd';
import './style.scss';

const ElPage = () => {
  return (
    <Row
      justify="space-between"
      gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
      className="mt-6 page"
    >
      <Col span={8}>
        <div className="scheme">
          <img src={scheme} alt="План этажа" className="svg_img" />
          <SchemeSvg />
        </div>
      </Col>
    </Row>
  );
};

export default ElPage;
