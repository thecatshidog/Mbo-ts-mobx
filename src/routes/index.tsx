import React from 'react';
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes';
import Login from '@/pages/Login';
import User from '@/pages/User';
import UserInfo from '@/pages/User/Info';
import UserInfoEdit from '@/pages/User/Edit';

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/user',
    component: User,
    routes: [
      {
        path: '/user/info',
        exact: true,
        component: UserInfo,
      },
      {
        path: '/user/edit',
        exact: true,
        component: UserInfoEdit,
      },
    ],
  },
];

export default () => (
  <Router>
    <Switch>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
);
