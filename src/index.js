import './index.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Root from './containers/Root/Root';
import reducer from './reducers';

// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app'),
);
// registerServiceWorker();
