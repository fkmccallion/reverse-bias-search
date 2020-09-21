import React from 'react';
import './App.css';

import Query from './containers/Query'
import Results from './containers/Results';

function App() {
  return (
    <div className="App">
      <header className="m-4">
        <Query />
      </header>
      <Results />
    </div>
  );
}

export default App;
