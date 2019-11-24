import React from 'react';
import { Route, Switch } from 'react-router-dom'; // To switch pages and routing
import { ConnectedRouter } from 'connected-react-router'; // Connect route with history
import history from '../utils/history';

// import necessary pages from layouts/
import FormPage from '../layouts/FormPage';
import DisplayPage from '../layouts/DisplayPage';

const MainRouter = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path='/' component={FormPage} />
            <Route path='/display'component={DisplayPage} />
        </Switch>
    </ConnectedRouter>
);

export default MainRouter;