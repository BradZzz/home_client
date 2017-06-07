// @flow
import React from "react";
import { Route, IndexRoute } from "react-router";
import CoreLayout from "./layouts/CoreLayout";
import {
  IndexPage,
  ProfilePage,
  HomePage,
  PortfolioPage,
  ResumePage,
} from "./containers/pages/";

import type { Store } from "redux";


/* eslint-disable no-unused-vars, arrow-body-style */
const getRoutes = (store: Store<*, *>) => {
  return (
    <Route path="/" component={ CoreLayout }>
      <IndexRoute component={ IndexPage } />
      <Route path="/home" component={ HomePage } />
      <Route path="/portfolio" component={ PortfolioPage } />
      <Route path="/resume" component={ ResumePage } />
      <Route path="/profile" component={ ProfilePage } />
    </Route>
  );
};
/* eslint-enable no-unused-vars, arrow-body-style */


export default getRoutes;
