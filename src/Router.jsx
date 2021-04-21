import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CharacterCreation from './components/CharacterCreation';
import Layout from './components/layout/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/register" component={CharacterCreation} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
