import React from 'react';
import { routerRedux, Switch, Route } from 'dva/router';
import App from './layouts/App';

const { ConnectedRouter } = routerRedux;

const routeConfigArray = [{
  path: '/demo', model: ['demo'], component: () => import('./pages/Demo'),
}];

const registerModel = (app) => {
  routeConfigArray.forEach((item) => {
    // eslint-disable-next-line
    item.model.forEach((model) => { app.model(require(`./model/${model}`).default); });
  });
};

export default function ({ history, app }) {
  registerModel(app);
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" render={props => <App {...props} />} />
      </Switch>
    </ConnectedRouter>
  );
}
