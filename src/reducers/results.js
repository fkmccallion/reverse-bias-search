export default (state = { results: [] }, action) => {

  switch (action.type) {
    case 'POPULATE_RESULTS':

      return {
        results: Object.entries(action.results)[1][1]["organic_results"]
      }
      default:
        return state;
  }

}
