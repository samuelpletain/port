const view = {
  createElem: function(elem, classes, content = null) {
    const element = document.createElement(elem)
    element.classList.add(classes)
    if (content) {
      element.textContent = content
    }
    return element
  },
  renderHome: function(parent, links) {
    parent.innerHTML = ''
    const main = this.createElem('main', 'main')
    const title = this.createElem('h1', 'title', 'Fun with Flags')
    const container = this.createElem('div', 'cards_container')
    for (let link of links) {
      const card = this.createElem('div', 'card')
      const icon = this.createElem('img', 'icon')
      icon.src = link.icon
      const header = this.createElem('h2', 'category', link.title)
      card.append(icon, header)
      card.addEventListener('click', () => {
        link.render(parent)
      })
      container.append(card)
    }
    main.append(title, container)
    parent.append(main)
  },
  renderFlags: function(parent, data) {
    parent.innerHTML = ''
    const main = this.createElem('main', 'main')
    const title = this.createElem('h1', 'title', 'Flags')
    const container = this.createElem('div', 'flags_container')
    for (let country of data) {
      const div = this.createElem('div', 'country')
      const img_container = this.createElem('div', 'flag_container')
      const flag = this.createElem('img', 'country__flag')
      flag.src = country.flags.png
      const name = this.createElem('p', 'country__name', country.name.common)
      img_container.append(flag)
      div.append(img_container, name)
      container.append(div)
    }
    main.append(title, container)
    parent.append(main)
  },
  renderFlashcards: function(parent, data) {
    parent.innerHTML = ''
    const main = this.createElem('main', 'main')
    const title = this.createElem('h1', 'title', 'Flashcards')
    const container = this.createElem('div', 'region_container')
    for (let region in data) {
      const div = this.createElem('div', 'region')
      const img = this.createElem('img', 'region__image')
      img.src = `./img/${region}.svg`
      const name = this.createElem('a', 'region__name', region)
      div.append(img, name)
      div.dataset.region = region
      img.dataset.region = region
      name.dataset.region = region
      div.addEventListener('click', (event) => {
        console.log(event.target)
        this.renderFlashcard(parent, event.target.dataset.region)
      }) 
      container.append(div)           
    }
    main.append(title, container)
    
    parent.append(main)
  },
  renderQuizzes: function(parent, data) {
    parent.innerHTML = ''
    const main = this.createElem('main', 'main')
    const title = this.createElem('h1', 'title', 'Quizzes')
    main.append(title)
    parent.append(main)
  },
  renderFlashcard: function(parent, region) {
    parent.innerHTML = ''
    const backLink = this.createElem('a', 'back_link', 'Flashcards') 
    const main = this.createElem('main', 'main')
    const title = this.createElem('h1', 'title', region)
    const container = this.createElem('div', 'flashcards_container')
    main.append(backLink, title, container)
    parent.append(main)
  }
}

export default view