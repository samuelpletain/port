const local = {
  getData(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  setData(key, data) {
    const json = JSON.stringify(data)
    localStorage.setItem(key, json)
  }
}

export default local