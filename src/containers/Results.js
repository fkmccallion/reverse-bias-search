import React, { Component } from 'react';
import { connect } from 'react-redux';


class Results extends Component {
  render() {

    return(
      <div>
        {this.props.results.map(r =>
          <div key={r.position} className="m-4 text-left">
            {console.log(r)}
            {r.displayed_link}<br />
            {r.title}<br />
            {r.snippet}
          </div>
        )}
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
