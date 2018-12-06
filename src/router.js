import React from 'react';
import { routerRedux, Switch, Route } from 'dva/router';
import App from './layouts/App';

const { ConnectedRouter } = routerRedux;

export default function ({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" render={props => <App {...props} />} />
      </Switch>
    </ConnectedRouter>
  );
}
