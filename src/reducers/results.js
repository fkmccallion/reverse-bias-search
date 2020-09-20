export default (state = { results: [] }, action) => {

  switch (action.type) {
    case 'POPULATE_RESULTS':
        let results = [];
        console.log(action.results)
        for (const result in action.results) {
          if (result === "organic_results") {
             results = action.results[result]
          }
        }

      return {
        results: results
      }

      default:
        return state;
  }

}
