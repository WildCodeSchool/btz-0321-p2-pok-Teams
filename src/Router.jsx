import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CharacterCreation from './components/CharacterCreation';
import HomePage from './components/HomePage';
import Layout from './components/layout/Layout';
import Howtoplay from './components/Howtoplay';
import Pokedex from './components/Pokedex';
import MyTeam from './components/MyTeam';
import NewTeam from './components/NewTeam';
import WorldMap from './components/WorldMap';

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
        <LayoutedRoute path="/Pokedex" layout={Layout} component={Pokedex} />
        <LayoutedRoute path="/test" layout={Layout} component={MyTeam} />
        <LayoutedRoute path="/myteam" layout={Layout} component={NewTeam} />
        <LayoutedRoute path="/worldmap" layout={Layout} component={WorldMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
