const list = document.getElementById('list');
const links = [
  {
    label: "Week 1 - Notes",
    url: "week01/index.html"
  },
  {
    label: "Week 1 - Story Writter",
    url: "week01/story_editor.html"
  },
  {
    label: "Week 2 - Notes",
    url: "week02/index.html"
  },
  {
    label: "Week 2 - Group Activity",
    url: "week02/group/index.html"
  },
  {
    label: "Week 2 - Quiz Ninja",
    url: "week02/quiz/index.html"
  },
  {
    label: "Week 3 - Notes",
    url: "week03/index.html"
  },
  {
    label: "Week 3 - Group Activity",
    url: "week03/group/Array Cardio 💪.html"
  },
  {
    label: "Week 3 - Group Activity Stretch Goals",
    url: "week03/group/Array Cardio 💪💪.html"
  },
  {
    label: "Week 3 - Quiz Ninja",
    url: "week03/quiz/index.html"
  },
  {
    label: "Challenge 1",
    url: "challenge1/index.html"
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