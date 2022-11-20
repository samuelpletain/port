const flags = {
  URL: 'https://restcountries.com/v3.1/all',
  getFlags: async function() {
    let dataset
    await fetch(this.URL)
      .then(response => response.json())
      .then(data => dataset = data)

    let res = []
    for(let country of dataset) {
      res.push((({name, flags, region})=>({name, flags, region}))(country))
    }
    return res
  }
}

export default flags