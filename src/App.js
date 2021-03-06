import React from 'react';
import './App.scss';

import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import CampK12 from 'containers/CampK12';
import Navbar from 'containers/Navbar';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path="/online-courses">
          <CampK12 />
        </Route>
        <Route path="/offline-camp">
          <h1>WIP</h1>
        </Route>
        <Route path="/refer-n-earn">
          <h1>WIP</h1>
        </Route>
        <Route path="/">
          <Redirect to="/online-courses" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
