const ls = {
  saveData(todoList) {
    localStorage.setItem('todos', todoList);
  },
  getSavedData() {
    return localStorage('todos');
  }
}

export default ls