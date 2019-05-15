import React from 'react';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import MainContainer from './Containers/MainContainer';

import { hot } from 'react-hot-loader/root';
const App = () => {
  return (
    // <div>My React App</div>
    // <Login />
    // <Signup />
    <MainContainer />
  );
};

export default hot(App);
