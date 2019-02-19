import * as React from 'react';
import styled from 'styled-components';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
// import { applyMiddleware, compose, createStore } from 'redux'
// import { connectRouter, routerMiddleware } from 'connected-react-router'

const Container = styled.div`
  width: 100%;
`;

//const history = createBrowserHistory();

// const store = createStore();

const App = () => (
  // <Provider store={store}>
  //<ConnectedRouter history={history}>
    <Container>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Container>
  //</ConnectedRouter>
  // </Provider>
);

export default App;
