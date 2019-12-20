import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { Container } from './styles';

import About from "../components/About";
import Home from "../components/Home";
import Topics from "../components/Topics";

export default function Routes() {
  return (
    <BrowserRouter basename="/react-router-github-pages-example">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </BrowserRouter>
  );
}
