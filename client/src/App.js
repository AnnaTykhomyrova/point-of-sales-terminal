import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from "./containers/Home.jsx"
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;