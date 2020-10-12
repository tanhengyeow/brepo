import React from "react";
import { Route, Switch } from "react-router-dom";

import BookRepoRoute from "./BookRepoRoute";
import Home from "../components/Home/Home";
import NewBook from "../components/NewBook/NewBook";
import NotFound from "../components/NotFound/NotFound";

const Pages = () => {
  return (
    <Switch>
      <BookRepoRoute path="/" exact component={Home} />
      <BookRepoRoute path="/newBook" exact component={NewBook} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Pages;
