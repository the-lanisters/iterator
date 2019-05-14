import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store.js';

if (module.hot) module.hot.accept();

const App = () => {
  return (
    <Provider store={store}>
      <div id="rootApp">Something</div>
    </Provider>
  );
};

render(<App />, document.querySelector('#root'));
