import React from 'react';
import Routes from '@/routes';
import { Provider } from 'mobx-react';
import stores from '@/stores';
import { hot } from 'react-hot-loader/root';

const App = () => (
  <Provider store={stores}>
    <Routes />
  </Provider>
);

export default (process.env.NODE_ENV === 'development' ? hot(App) : App);
