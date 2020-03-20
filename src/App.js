import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute.component';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  Auth,
  Navbar,
  Login,
  Register,
  Home,
  Newsfeed
} from './components/index';

const App = () => (
  <Provider store={store}>
    <Auth />
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/news" component={Newsfeed} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
