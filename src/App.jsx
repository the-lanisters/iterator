import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import store from './store/store.js';

const App = () => {
  return (
    <Provider store={store}>
      <div id="rootApp">Something</div>
    </Provider>
  );
};

export default hot(App);
