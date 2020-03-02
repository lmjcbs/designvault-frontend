import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute.component';
import { Provider } from 'react-redux';
import { store } from './store';
import { Navbar, Login, Register, Home } from './components/index';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
