import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Login } from './components/index';
import './index.css';

ReactDOM.render(
  <Router>
    <Navbar />
    <Route exact path="/login" component={Login} />
  </Router>,
  document.getElementById('root')
);
