import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import { CardPage, LandingPage, Repos } from "../pages";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/card" component={CardPage} />
      <Route exact path="/repos" component={Repos} />
    </Switch>
  );
}
