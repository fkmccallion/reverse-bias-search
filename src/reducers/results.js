export default (state = { results: [] }, action) => {

  Array.prototype.eachSlice = function (size){
    this.arr = []
    for (var i = 0, l = this.length; i < l; i += size){
      this.arr.push(this.slice(i, i + size))
    }
    return this.arr
  };

  switch (action.type) {
    case 'RESET':
      return {
        results: []
      }
    case 'POPULATE_BING_RESULTS':
      let results = [];
      for (const result in action.results) {
        if (result === "organic_results") {
           results = action.results[result]
        }
      }
      for (const result of results) {
        result.engine = "bing";
      }
      console.log(state.results)
      let allResultsBing = (state.results.length == 0) ? results : [...state.results, results].flat()
      let x = 0;
      for (const allResults of allResultsBing) {
        allResults.key = x
        x++;
      }
      return {
        results: allResultsBing.sort((a, b) => (a.position > b.position) ? 1 : -1).eachSlice(3)
      }
    case 'POPULATE_YAHOO_RESULTS':
      let results2 = [];
      for (const result in action.results2) {
        if (result === "organic_results") {
           results2 = action.results2[result]
        }
      }
      for (const result of results2) {
        result.engine = "yahoo";
      }
      console.log(state.results)
      let allResultsYahoo = (state.results.length == 0) ? results2 : [...state.results, results2].flat()
      let y = 0;
      for (const allResults of allResultsYahoo) {
        allResults.key = y
        y++;
      }
      return {
        results: allResultsYahoo.sort((a, b) => (a.position > b.position) ? 1 : -1).eachSlice(3)
      }
    case 'POPULATE_GOOGLE_RESULTS':
      let results3 = [];
      for (const result in action.results3) {
        if (result === "organic_results") {
           results3 = action.results3[result]
        }
      }
      for (const result of results3) {
        result.engine = "google";
      }
      let allResultsGoogle = (state.results.length == 0) ? results3 : [...state.results, results3].flat()
      let z = 0;
      for (const allResults of allResultsGoogle) {
        allResults.key = z
        z++;
      }
      return {
        results: allResultsGoogle.sort((a, b) => (a.position > b.position) ? 1 : -1).eachSlice(3)
      }
    default:
      return state;
  }

}
