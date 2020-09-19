export const fetchResults = query => {

  var SerpWow = require('google-search-results-serpwow')

  // create the serpwow object, passing in our API key
  let serpwow = new SerpWow('***REMOVED***')

  // set up the search parameters
  var params = {
    q: query.query,
    engine: 'bing'
  }

  // retrieve the search results as JSON
  serpwow.json(params)
    .then(result => {
      // pretty-print the JSON result
      console.log(JSON.stringify(result, 0, 2));
    })
    .catch(error => {
      console.log(error);
    });

}
