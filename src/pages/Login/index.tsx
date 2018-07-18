import * as React from 'react';

interface IProps {}

interface IState {
  name: string;
}

class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'login',
    };
  }
  render() {
    return (
      <div>
        <h2>login</h2>
      </div>
    );
  }
}

export default Login;
