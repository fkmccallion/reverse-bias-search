import React, { Component } from 'react';
import { connect } from 'react-redux';


class Results extends Component {


  render() {
    return(
      <div>
        <div className="container">
          {this.props.results.map(r =>
            <div className="row m-1">
              {r.map( result =>
                <div className="col-sm card m-1">
                  <div className="row">
                    <div className="col">
                      {result.engine}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href={result.link}>
                        <span className="d-block small-font">{result.displayed_link}</span>
                        <span className="d-block text-danger">{result.title}</span>
                      </a>
                      <span className="d-block small-font">{result.snippet}</span>
                    </div>
                  </div>
                </div>
              )}
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
