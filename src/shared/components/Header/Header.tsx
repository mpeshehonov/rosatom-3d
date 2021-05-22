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
        <Link to="/panel">
          <Button type="primary" shape="round" size="large">
            Панель
          </Button>
        </Link>
      </div>
    </Layout.Header>
  );
};

export default Header;
