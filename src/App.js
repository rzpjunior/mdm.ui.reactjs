import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DefaultLayout from './container/defaultLayout'


function App() {
  return (
    <div className="App">

      <Router >
        <Route exact="/" component={DefaultLayout} />
      </Router>

    </div>
  );
}

export default App;
