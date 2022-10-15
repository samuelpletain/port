import ls from './ls.js';
import view from './utils.js';

const date = Date.now()

export default class Todos {
  
  constructor() {
    this.todoList = [{
      key: 0,
      content: "A todo task",
      completed: true
    },
    {
      key: 1,
      content: "Another todo task",
      completed: true
    },
    {
      key: 2,
      content: "And a last todo task",
      completed: false
    }];
    this.parentElement = document.getElementById('todoList'); 
  }

  getAllTodos() {
    return this.todoList;
  }

  saveTodo(task) {
    const todo = {
      completed: false,
      content: task,
      key: Date.now()
    }
    this.todoList.push(todo)
    return todo
  }

  getTodo(key) {
    return this.todoList.find(todo => todo.key === key)
  }

  addTodo() {

  }

  deleteTodo(key) {
    const index = this.todoList.findIndex((todo) => todo.key === key);
    this.todoList.splice(index, 1);
    console.log(this.todoList);
  }

  displayTodos() {
    this.listTodos()
    this.addCompletedListener()
    this.addDeleteListener()
  }

  addCompletedListener() {
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      const input = child.children.completeButton
      input.addEventListener('touchend', e => {
        // why currentTarget instead of target?
        const key = parseInt(view.getParentDataset(e.currentTarget))
        this.completeTodo(key)
        e.currentTarget.parentElement.classList.toggle('todo--completed')
      });
    });
  }

  addDeleteListener() {
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      const deleteButton = child.children.deleteButton
      deleteButton.addEventListener('touchend', e => {
        // why currentTarget instead of target?
        const key = parseInt(view.getParentDataset(e.currentTarget))
        console.log(key)
        this.deleteTodo(key)
        this.displayTodos()
      });
    });
  }

  listTodos() {
    view.renderTodoList(this.parentElement, this.todoList)
  }

  completeTodo(key) {
    const todo = this.getTodo(key);
    todo.completed = !todo.completed
    return todo
  }
}