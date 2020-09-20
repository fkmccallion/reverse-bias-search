import React from 'react';
import logo from './logo.svg';
import './App.css';

import Query from './containers/Query'
import Results from './containers/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Query />
      </header>
      <Results />
    </div>
  );
}

export default App;
