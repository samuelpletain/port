const flashcards = {
  regions: [],
  getRegions: function() {
    return this.regions
  },
  setRegions: function(dataset) {
    let res = {}
    for(let country of dataset) {
      if (country.region in res) {
        res[country.region].push(country)
      } else {
        res[country.region] = [country]
      }
    }
    this.regions = res
  },
  getFlashcards: function(region) {
    return this.regions[region]
  }
}

export default flashcards