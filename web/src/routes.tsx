import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing/inde';
import OrphanagesMaps from './pages/OrphanagesMaps';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/maps" component={OrphanagesMaps} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
