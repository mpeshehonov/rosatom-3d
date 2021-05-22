import React from 'react';
import {Layout, Button} from 'antd';
import './styles.scss';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Layout.Header className="header">
      <Link to="/" className="header__logo">
        РОСАТОМ
      </Link>
      <div className="header__button">
        <Link to="/el">
          <Button type="primary" shape="round" size="large">
            План
          </Button>
        </Link>
        <Link to="/view-3d">
          <Button type="primary" shape="round" size="large">
            3D
          </Button>
        </Link>
      </div>
    </Layout.Header>
  );
};

export default Header;
