import React from 'react';
import {Layout, Button, Space, Divider} from 'antd';
import './styles.scss';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Layout.Header className="header">
            <Link to="/" className="header__logo">
                РОСАТОМ
            </Link>
            <div className="header__button">
                <Space split={
                    <Divider
                        type="vertical"
                    />}>
                    <Link to="/panel">
                        <Button type="primary" shape="round" size="large">
                            Панель
                        </Button>
                    </Link>
                    <Link to="/floor">
                        <Button type="primary" shape="round" size="large">
                            План этажей
                        </Button>
                    </Link>
                    <Link to="/table">
                        <Button type="primary" shape="round" size="large">
                            Показатели
                        </Button>
                    </Link>
                </Space>
            </div>
        </Layout.Header>
    );
};

export default Header;
