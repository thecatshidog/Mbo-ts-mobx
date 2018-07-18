import * as React from 'react';

interface IProps {}

interface IState {
  name: string;
}

class UserInfo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'info',
    };
  }
  render() {
    return (
      <div>
        <h2>info</h2>
      </div>
    );
  }
}

export default UserInfo;
