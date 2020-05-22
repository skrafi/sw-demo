import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { PersonList } from './components/PersonList/PersonList';
import { Navigation } from './components/Navigation/Navigation';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Navigation />
                    <Switch>
                        <Route path="/people" component={PersonList} />
                        <Route exact path="/">
                            <Redirect to="/people" />
                        </Route>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
