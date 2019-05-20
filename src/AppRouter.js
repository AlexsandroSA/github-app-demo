import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { WebRouter } from 'config/router';
import Repositories from './scenes/Repositories/Repositories.container';
import RepositoryDetails from './scenes/RepositoryDetails/RepositoryDetails.container';

const AppRouter = () => (
  <Router>
    <Route exact path={WebRouter.HOME} component={Repositories} />
    <Route exact path={WebRouter.REPOSITORY_DETAILS} component={RepositoryDetails} />
  </Router>
);

export default AppRouter;
