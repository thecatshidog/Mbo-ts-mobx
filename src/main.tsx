import * as React from 'react';
import ReactDOM from 'react-dom';
import 'core-js';
import { Provider } from 'mobx-react';
import App from '@/app';
import registerServiceWorker from '@/registerServiceWorker';
import stores from '@/stores';

const Root = () => (
  <Provider store={stores}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
registerServiceWorker();
