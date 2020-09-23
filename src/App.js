import React from 'react';
import './App.css';

import Query from './containers/Query'
import Results from './containers/Results';

import balance from './media/images/balance.png';

function App() {

  return (
    <div className="App">
      <header className="m-4">
        <img src={balance} height="100px" alt="Clker-Free-Vector-Images from Pixabay" title="Balance Scale" />
        <h1 className="text-dark">Reverse Bias Web Search</h1>
        <span className="mb-5">Anonymously cross-reference 1st page organic search results across Google, Bing and Yahoo search engines</span>
      </header>
      <Query />
      <Results />
    </div>
  );
}

export default App;
