import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ForgotPage from './ForgotPage';
import MainPage from './MainPage/MainPage';

export default () => {
  return (
    <Switch>
      <Route path="/main" component={MainPage} exact />
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={LoginPage} exact />
      <Route path="/register" component={RegisterPage} exact />
      <Route path="/forgot" component={ForgotPage} exact />
    </Switch>
  );
};
