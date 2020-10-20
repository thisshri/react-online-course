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
        <Route path="/">
          <CampK12 />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
