import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {

  defaultAds = () => {
    let ads = [];
      ads.push( {name: "Ventana Properties",
        title: "Real Estate Brokerage in Ventura California",
        description: "Having the right real estate agent means having an agent who is committed to helping you buy or sell your home with the highest level of expertise in your local market. This means also to help you in understanding each step of the buying or selling process. This commitment level has helped us build a remarkable track record of delivering results.",
        website: "https://www.ventanaproperties.net"} );
      ads.push( {name: "Barefoot Floors",
        title: "Hardwood Flooring Installation in Ventura California",
        description: "Barefoot Floors is located in Camarillo, Ca. The owner, Joseph Mendez, has been working in the flooring business since 1995. To Joe, flooring is artwork. His passion is designing and creating custom floors.",
        website: "http://www.barefootcustomfloors.com"} );
    return ads;
  }

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
              <div className="col-lg card m-2 pr-3 pb-3 pl-3 shadow">
                <a href={this.defaultAds()[0].website} className="text-decoration-none" rel="noopener noreferrer" target="_blank">
                <div className="row">
                  <div className="col card-header text-light bg-primary">
                    <sup className="mr-1">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-badge-ad" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                        <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"/>
                      </svg>
                    </sup>
                    {this.defaultAds()[0].name}
                    <span className="d-block small-font">{this.defaultAds()[0].website}</span>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col">
                    <span className="d-block text-primary decoration">{this.defaultAds()[0].title}</span>
                    <span className="d-block small-font text-dark">{this.defaultAds()[0].description.substring(0,300)}</span>
                  </div>
                </div>
              </a>
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
