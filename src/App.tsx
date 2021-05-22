import React from 'react';
import PageLayout from './shared/components/PageLayout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.less';
import './styles.scss';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route path="/" component={MainPage} exact />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default App;
