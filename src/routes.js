import React from 'react';
import { Route } from 'react-router-dom';

import { AppComponent } from './app.jsx';
import { HomeComponent } from './modules/home/home.jsx';

import { UsersRoutes } from './modules/users/users.routes';

export default (
    <div>
        <Route path="/" component={AppComponent} />
        <Route path="/home" component={HomeComponent} />
        {UsersRoutes}
    </div>
);
