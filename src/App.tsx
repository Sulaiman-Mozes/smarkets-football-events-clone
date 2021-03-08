import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Events from "./containers/events";
import EventDetails from "./containers/event";
import NotFound from "./components/notFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Events} />
        <Route path="/events/:eventId/" exact component={EventDetails} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
