import React, { Component } from 'react';

import Search from '../components/Search';
import Results from '../components/Results';

class Query extends Component {

  render() {
    return (
      <div>
        <Search />
        <Results />
      </div>
    )
  }

}

export default Query
