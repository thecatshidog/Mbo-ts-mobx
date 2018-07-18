import * as React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithSubRoutes, {
  RouteProps,
} from '@/components/RouteWithSubRoutes';
import CSSModule from '@/utils/cssmodule';
import * as styles from './index.scss';

interface IProps {
  routes: RouteProps[];
}

interface IState {
  name: string;
}

@CSSModule(styles)
class User extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'user',
    };
  }
  render() {
    const { routes } = this.props;
    return (
      <div>
        <h2>user</h2>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          <Redirect from="/user" to="/user/info" />
        </Switch>
      </div>
    );
  }
}

export default User;
