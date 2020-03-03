import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute.component';
import { Provider } from 'react-redux';
import { store } from './store';
import { Auth, Navbar, Login, Register, Home } from './components/index';

const App = () => (
  <Provider store={store}>
    <Auth />
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
