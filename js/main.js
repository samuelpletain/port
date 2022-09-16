const list = document.getElementById('list');
const links = [
  {
    label: "Week 1 - Notes",
    url: "week1/index.html"
  },
  {
    label: "Week 1 - Story Writter",
    url: "week1/story_editor.html"
  },
]

function createListItems(list, items) {
  items.forEach((item) => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    let linkText = document.createTextNode(item.label)
    a.appendChild(linkText)
    a.href = "./" + item.url
    list.appendChild(li).appendChild(a)
  })
}

createListItems(list, links)