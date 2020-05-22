import React from 'react';
import './App.css';
import { PersonList } from './components/PersonList/PersonList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <PersonList />
            </header>
        </div>
    );
}

export default App;
