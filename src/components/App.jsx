import React from "react";
import { Route, Switch } from "react-router-dom";
import ViewProduct from "./ViewProduct";
import Customers from "./Customers";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <ViewProduct />
      </Route>
      <Route path="/customers">
        <Customers />
      </Route>
    </Switch>
  );
}

export default App;
