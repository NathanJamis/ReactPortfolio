import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/skills' component={Skills} />
      </Switch>
    </Router>
  );
}

export default App;