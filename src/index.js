import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Navbar, Login, Register } from './components/index';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
