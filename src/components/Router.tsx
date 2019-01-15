import * as React from 'react';
import Home from './Home/Home';
import { Route, Switch } from 'react-router';
import PostQuestion from './Question/PostQuestion';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

// interface Props extends RouteComponentProps<any>{}

const history = createBrowserHistory();

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/post'} component={PostQuestion} />
      </Switch>
    </div>
  </ConnectedRouter>
);

export default Router;
