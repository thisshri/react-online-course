import React from 'react';
import './App.scss';

import {
  HashRouter,
  Switch,
  Route,
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
          <h1>404</h1>
        </Route>
        <Route path="/refer-n-earn">
          <h1>404</h1>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
