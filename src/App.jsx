import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import MainContainer from './Containers/MainContainer';

const App = () => {
  return (
    <Provider store={store}>
    <div>My React App</div>
    <Login />
    <Signup />
    <MainContainer />
    </Provider>
  );
};

export default hot(App);

const App = () => {
  return (
  );
};

export default App;
