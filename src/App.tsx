import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { Navigation } from './components/Navigation/Navigation';
import { ROUTES, PRIVATE_ROUTES } from './constants/routes';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <Router>
                    <Navigation />
                    <Switch>
                        {PRIVATE_ROUTES.map((r) => (
                            <Route key={r.path} exact path={r.path} component={r.component} />
                        ))}
                        {ROUTES.map((r) => (
                            <Route key={r.label} exact path={r.path} component={r.component} />
                        ))}
                        <Route exact path="/">
                            <Redirect to="/people" />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
