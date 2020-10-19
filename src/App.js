import React from 'react';
import './App.scss';

import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import CampK12 from 'containers/CampK12';
import Navbar from 'containers/Navbar';
import HeaderBackground from 'static/header-background.svg';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path="/">
          <img className="campk12" alt="" src={HeaderBackground} />
          <CampK12 className="fo" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
