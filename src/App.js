import React from 'react';
import './App.scss';

import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import CampK12 from 'containers/CampK12';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={CampK12}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
