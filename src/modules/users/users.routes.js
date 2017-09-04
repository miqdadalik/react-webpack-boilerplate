import React from 'react';
import { Route } from 'react-router-dom';

import { UsersComponent } from './users.jsx';
import { UsersListComponent } from './list.jsx';
import { UserCreateComponent } from './create.jsx';

export const UsersRoutes = (
    <div>
        <Route path="/users" component={UsersComponent} />
        <Route path="/users/list" component={UsersListComponent} />
        <Route path="/users/create" component={UserCreateComponent} />
    </div>
);
