import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Redirect to="/" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
