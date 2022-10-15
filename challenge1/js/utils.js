const view = {
  renderOneTodo(todo) {
    const item = document.createElement('li');
    item.classList.add("todo_list__todo", "todo");
    item.dataset.key = todo.key;
    if (todo.completed) {
      item.classList.add("todo--completed");
    }
    item.innerHTML = `
    <input type="checkbox" class="todo__toggle" name="completeButton" ${todo.completed ? 'checked' : ''}>
    <p class="todo__content">${todo.content}</p>
    <div class="todo__delete_button" name="deleteButton">X</div>
    `;
    return item;
  },
  renderTodoList(parent, todoList) {
    parent.innerHTML = ''
    todoList.forEach(todo => {
      parent.appendChild(this.renderOneTodo(todo));
    });
  },
  getParentDataset(target) {
    return target.parentNode.dataset.key
  }
} 

export default view