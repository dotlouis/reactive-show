import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'mobx-react';
import { RxNode } from './stores/RxNode';

ReactDOM.render(
  <Provider rootNode={new RxNode()}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
