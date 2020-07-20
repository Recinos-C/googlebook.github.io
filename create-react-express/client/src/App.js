import React, { Component } from "react";
import "./App.css";
import { StoreProvider } from "../../../../../../../reactpractice/mini-project-solved/client/src/utils/GlobalState";

function App() {
  return (
    <Nav />
<Router>
  <div>
    <StoreProvider>
      <Nav />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={search} />
      <Route exact path="/saved" component={saved} />
      </Switch>
    </StoreProvider>
  </div>
</Router>
  )
}


export default App;
