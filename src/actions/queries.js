export const fetchResults = query => {

  return (dispatch) => {
    fetch("https://api.serpwow.com/live/search", {
      body: "api_key=***REMOVED***&q=" + query.query,
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(results => {
        dispatch({ type: 'POPULATE_RESULTS', results })
      });
  };



};
