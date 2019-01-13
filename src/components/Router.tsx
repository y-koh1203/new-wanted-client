import * as React from 'react';
import Home from './Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
);

export default Router;