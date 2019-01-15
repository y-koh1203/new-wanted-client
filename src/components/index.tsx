import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home';
import PostQuestion from './Question/PostQuestion';
import Questions from './Question/Questions';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router'

// import { createBrowserHistory } from 'history'
// import { applyMiddleware, compose, createStore } from 'redux'
// import { connectRouter, routerMiddleware } from 'connected-react-router'

const Container = styled.div`
  width: 100%;
`;

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/post" component={PostQuestion} />
      <Route exact path="/questions" component={Questions} />
    </div>
  </BrowserRouter>
);

// const history = createBrowserHistory()
// const store = createStore();

const App = () => (
  // <Provider store={store}>
  //  <ConnectedRouter history={history}>
  <Container>
    <Router />
  </Container>
  //  </ConnectedRouter>
  // </Provider>
);

export default App;
