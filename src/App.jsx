import React from 'react';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import MainContainer from './Containers/MainContainer';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import { hot } from 'react-hot-loader/root';

// const styles = {
//   nav: {
//     listStyleType: none
//   }
// };

const App = () => {
  return (
    // <MainContainer />
    <Router>
      <div>
        <Link
          to="/login"
          style={{
            fontWeight: 'bold',
            color: 'black',
            textDecoration: 'none',
            paddingRight: '5px',
            paddingLeft: '20px',
            paddingTop: '20px'
          }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          style={{
            fontWeight: 'bold',
            color: 'black',
            textDecoration: 'none',
            paddingTop: '20px',
            paddingLeft: '5px'
          }}
        >
          Sign Up
        </Link>
      </div>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/projects" component={MainContainer} />
      </div>
    </Router>
  );
};

export default hot(App);
