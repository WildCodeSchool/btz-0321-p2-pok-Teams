import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CharacterCreation from './components/CharacterCreation';
import HomePage from './components/HomePage';
import Layout from './components/layout/Layout';
import Howtoplay from './components/Howtoplay';

function LayoutedRoute({ layout: Layout, component: Component, ...rest }) {
  return Layout ? (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  ) : (
    <Route {...rest} component={Component} />
  );
}

LayoutedRoute.propTypes = {
  layout: PropTypes.node,
  component: PropTypes.node,
};

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <LayoutedRoute path="/register" layout={Layout} component={CharacterCreation} />
        <LayoutedRoute path="/app" layout={Layout} component={App} />
        <LayoutedRoute path="/howtoplay" layout={Layout} component={Howtoplay} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;