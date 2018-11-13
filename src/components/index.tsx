import * as React from "react";
import { BrowserRouter, Route }  from "react-router-dom";
import Home from './Home';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router'

// import { createBrowserHistory } from 'history'
// import { applyMiddleware, compose, createStore } from 'redux'
// import { connectRouter, routerMiddleware } from 'connected-react-router'

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
  </BrowserRouter>
);

// const history = createBrowserHistory()
// const store = createStore();

const App = () => (
  // <Provider store={store}>
  //  <ConnectedRouter history={history}> 
        <Router />
  //  </ConnectedRouter>
  // </Provider>
);

export default App;
