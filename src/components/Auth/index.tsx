import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

type IProps = {
  user: string;
};

const Auth = (props: IProps) => (
  <Route
    {...props}
    render={renderProps => {
      return props.user === undefined ? (
        <Component {...renderProps} />
      ) : (
        <Redirect
          to={{ pathname: '/', state: { from: renderProps.location } }}
        />
      );
    }}
  />
);

export default Auth;
