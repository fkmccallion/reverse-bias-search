import React, { Component } from 'react';
import { connect } from 'react-redux';

import barefoot from '../media/images/barefoot.jpg';

class Results extends Component {

  render() {
    return(
      <div>
        <div className="container-fluid">
          {this.props.results.map(r =>
            <div className="row m-1" key={r[0].position}>
              {r.map( result =>
                <div className="col-lg card m-2 pr-3 pb-3 pl-3 shadow" key={result.key}>
                  <a href={result.link} className="text-decoration-none" rel="noopener noreferrer" target="_blank">

                    <div className="row">
                      <div className="col card-header text-light bg-danger">
                        {result.engine.charAt(0).toUpperCase() + result.engine.slice(1)} Position {result.position}
                        <span className="d-block small-font">{result.domain}</span>
                      </div>
                    </div>
                    <div className="row pt-2">
                      <div className="col">
                        <span className="d-block text-danger decoration">{result.title}</span>
                        <span className="d-block small-font text-dark">{result.snippet ? result.snippet.substring(0,300) : null}</span>
                      </div>
                    </div>
                  </a>
                </div>
              )}
              <div className="col-lg">
                <div className="card m-2 p-3 shadow">
                  Advertisement TBD
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    results: state["results"]["results"]
  };
};

export default connect(mapStateToProps)(Results);
