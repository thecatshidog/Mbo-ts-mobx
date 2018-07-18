import React from 'react';

type IProps = {
  children: React.ReactNode;
};

const Container = (props: IProps) => (
  <div className="app">{props.children}</div>
);

export default Container;
