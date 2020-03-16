import React, { lazy, Suspense } from 'react';
import {Route} from 'react-router-dom'

const Router = () => {
    const routes = [
        {
            path: '/',
            exact: true,
            component: lazy(() => import("./components/pages/Bookshelf/Bookshelf"))
        },
        {
            path: '/add',
            exact: true,
            component: lazy(() => import("./components/pages/AddBook"))
        },
        {
            path: '/add/:id',
            exact: true,
            component: lazy(() => import("./components/pages/AddBook"))
        }
    ];
    const routerOutlet = routes.map(r =>
        <Suspense fallback={<div>Loading</div>} key={r.path}>
            <Route
                path={r.path}
                exact={r.exact}
                component={r.component}
            />
        </Suspense>
    );

    return <> {routerOutlet} </>;
};

export default Router;

