import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import pages from './Pages/PageList';

function App() {
  return (
    <div>
      <head>
        <meta property="og:title" content="__OG_TITLE__" />
        <meta property="og:description" content="__OG_DESCRIPTION__" />
      </head>
      <Router>
        <div className="App">
          <header className="App-header">
          <Switch>
            {pages.map(page => (
              <Route exact={page.exact} path={page.path}>
                {page.component}
              </Route>
            ))}
          </Switch>
          </header>
        </div>
      </Router>
    </div>
  );
}

export default App;