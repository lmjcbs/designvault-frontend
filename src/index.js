import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Login, Register } from './components/index';
import './index.css';

ReactDOM.render(
  <Router>
    <Navbar />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Router>,
  document.getElementById('root')
);
