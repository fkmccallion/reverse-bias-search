export default (state = { results: [] }, action) => {

  switch (action.type) {
    case 'POPULATE_BING_RESULTS':
      console.log(action.results)
      let results = [];
      for (const result in action.results) {
        if (result === "organic_results") {
           results = action.results[result]
        }
      }
      for (const result of results) {
        result.engine = "bing";
      }
      let allResultsBing = [...state.results, results].flat()
      return {
        results: allResultsBing
      }
    case 'POPULATE_YAHOO_RESULTS':
      console.log(action.results2)
      let results2 = [];
      for (const result in action.results2) {
        if (result === "organic_results") {
           results2 = action.results2[result]
        }
      }
      for (const result of results2) {
        result.engine = "yahoo";
      }
      console.log(results2)
      let allResultsYahoo = [...state.results, results2].flat()
      return {
        results: allResultsYahoo
      }
    case 'POPULATE_GOOGLE_RESULTS':
      console.log(action.results3)
      let results3 = [];
      for (const result in action.results3) {
        if (result === "organic_results") {
           results3 = action.results3[result]
        }
      }
      for (const result of results3) {
        result.engine = "google";
      }
      console.log(results3)
      let allResultsGoogle = [...state.results, results3].flat()
        return {
          results: allResultsGoogle
        }
    default:
      return state;
  }

}
