import React, {createContext, useState} from 'react';
import PageLayout from './shared/components/PageLayout';
import Routes from './pages/routes';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import 'antd/dist/antd.less';
import './styles.scss';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPage from './pages/ForgotPage';

export const UserContext = createContext<any | null>(null);

const App = () => {
  const [user, setUser] = useState<any | null>(null);

  const changeUser = (newUser: object) => setUser(newUser);

  return (
    <Router>
      <UserContext.Provider value={[user, changeUser]}>
        <PageLayout>
          <Switch>
            <Route path="/main" exact />
            <Route path="/" exact>
              <Redirect to="/login" />
            </Route>
            <Route path="/login" component={LoginPage} exact />
            <Route path="/register" component={RegisterPage} exact />
            <Route path="/forgot" component={ForgotPage} exact />
          </Switch>
        </PageLayout>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
