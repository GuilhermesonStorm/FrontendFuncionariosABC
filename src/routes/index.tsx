/* eslint-disable react/jsx-indent */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Users from '../pages/users';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/users/:id" component={Users} />
    </Switch>
);

export default Routes;
