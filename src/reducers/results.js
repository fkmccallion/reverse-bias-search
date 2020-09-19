export default (state = { results: [] }, action) => {

  switch (action.type) {
    case 'POPULATE_RESULTS':
      return {
        ...state,
        results: action.results
      }
      default:
        return state;
  }

}
