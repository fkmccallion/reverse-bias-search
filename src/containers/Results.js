import React, { Component } from 'react';
import { connect } from 'react-redux';


class Results extends Component {

  render() {
    return(
      <div>
        <div className="container">
          {this.props.results.map(r =>
            <div className="row m-1" key={r[0].position}>
              {r.map( result =>
                <div className="col-lg card m-2 p-3 shadow" key={result.key}>
                  <div className="row">
                    <div className="col">
                      {result.engine.charAt(0).toUpperCase() + result.engine.slice(1)} Position {result.position}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href={result.link} rel="noopener noreferrer" target="_blank">
                        <span className="d-block small-font">{result.domain}</span>
                        <span className="d-block text-danger">{result.title}</span>
                      </a>
                      <span className="d-block small-font">{result.snippet ? result.snippet.substring(0,300) : null}</span>
                    </div>
                  </div>
                </div>
              )}
              <div className="col-lg">
                Advertisement
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
