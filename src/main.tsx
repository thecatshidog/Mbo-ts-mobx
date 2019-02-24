import * as React from 'react';
import ReactDOM from 'react-dom';
import 'core-js';
import App from '@/app';
import registerServiceWorker from '@/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
