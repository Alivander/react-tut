import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './views/main';
import Page404 from './views/page404';
import './common/index.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" render={() => <Main />} />
            <Route path="*" render={() => <Page404 />} />
        </Switch>
    );
}

export default App;
