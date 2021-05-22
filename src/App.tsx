import React from 'react';
import PageLayout from './shared/components/PageLayout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.less';
import './styles.scss';
import MainPage from './pages/MainPage';
import ElPage from './pages/ElPage';
import ReConfigPage from './pages/ReConfigPage';

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/el" component={ElPage} exact />
          <Route path="/reconfig" component={ReConfigPage} exact />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default App;
