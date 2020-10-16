import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing/inde';
import Orphanage from './pages/Orphanage';
import OrphanagesMaps from './pages/OrphanagesMaps';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/maps" component={OrphanagesMaps} />
        <Route path="/orphanage/create" component={CreateOrphanage} />
        <Route path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
