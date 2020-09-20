import React, { Component } from 'react';
import { connect } from 'react-redux';


class Results extends Component {
  render() {

    return(
      <div>
        <div className="container">

            {this.props.results.map(r =>
              <div key={r.position} className="row m-4 text-left">
                <div className="col-sm-1">
                  Google
                </div>
                <div className="col-sm-11">
                  <a href={r.link}>
                    <span className="d-block small-font">{r.displayed_link}</span>
                    <span className="d-block text-danger">{r.title}</span>
                  </a>
                  <span className="d-block small-font">{r.snippet}</span>
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
