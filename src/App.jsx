import React from 'react';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import MainContainer from './Containers/MainContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { hot } from 'react-hot-loader/root';
const App = () => {
  return (
    // <div>My React App</div>
    // <Login />
    // <Signup />
    // <MainContainer />
    <Router>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup"> Sign Up </Link>
      </div>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
};

export default hot(App);
