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
  {
    label: "Week 2 - Notes",
    url: "week2/index.html"
  },
  {
    label: "Week 2 - Group activity",
    url: "week2/group/index.html"
  },
  {
    label: "Week 2 - Quiz Ninja",
    url: "week2/quiz/index.html"
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