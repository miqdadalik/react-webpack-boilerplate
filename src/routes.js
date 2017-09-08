import React from 'react';
import { Route } from 'react-router-dom';

import { AppComponent } from './app.jsx';
import { HomeComponent } from './modules/home/home.jsx';

import { UsersRoutes } from './modules/users/users.routes';
import { TodoAppComponent } from './modules/todo/todo'

export default (
    <div>
        <Route path="/" component={AppComponent} />
        <Route path="/home" component={HomeComponent} />
        <Route path="/todo" component={TodoAppComponent} />
        {UsersRoutes}
    </div>
);
