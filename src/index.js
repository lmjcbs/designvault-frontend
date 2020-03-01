import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './components/index';
import './index.css';

ReactDOM.render(
  <Router>
    <Navbar />
  </Router>,
  document.getElementById('root')
);
