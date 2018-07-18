import * as React from 'react';

interface IProps {}

interface IState {
  name: string;
}

class UserEdit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'edit',
    };
  }
  render() {
    return (
      <div>
        <h2>edit</h2>
      </div>
    );
  }
}

export default UserEdit;
