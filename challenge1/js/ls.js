function saveData(todoList) {
  localStorage.setItem('todos', todoList);
}

function getSavedData() {
  return localStorage('todos');
}