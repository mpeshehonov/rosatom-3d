import React, {useContext} from 'react';
import {Layout, Button, Typography} from 'antd';
import './styles.scss';
import {Link, useLocation, useHistory} from 'react-router-dom';
import {UserContext} from '../../../App';

const {Text} = Typography;

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const [user, changeUser] = useContext(UserContext);

  const logout = () => {
    changeUser(null);
    history.push('/');
  };

  return (
    <Layout.Header className="header">
      <Link to="/" className="header__logo">
        РОСАТОМ
      </Link>
      {user ? (
        <Button type="link" onClick={logout}>
          Выйти
        </Button>
      ) : (
        <>
          {location.pathname === '/register' ? (
            <div className="header__button">
              <Text className="mr-1">Уже есть аккаунт?</Text>
              <Link to="/login">
                <Button type="primary" shape="round" size="large">
                  Войти
                </Button>
              </Link>
            </div>
          ) : (
            <div className="header__button">
              <Text className="mr-1">У вас нет аккаунта?</Text>
              <Link to="/register">
                <Button type="primary" shape="round" size="large">
                  Регистрация
                </Button>
              </Link>
            </div>
          )}
        </>
      )}
    </Layout.Header>
  );
};

export default Header;
