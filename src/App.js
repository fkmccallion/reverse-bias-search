import React from 'react';
import './App.css';

import Query from './containers/Query'
import Results from './containers/Results';

function App() {
  return (
    <div className="App">
      <header className="m-4">
        <h1 className="text-danger">Reverse Bias Web Search</h1>
        <span className="mb-5">Cross-reference search results across Google, Bing and Yahoo search engines</span>
      </header>
      <Query />
      <Results />
    </div>
  );
}

export default App;
