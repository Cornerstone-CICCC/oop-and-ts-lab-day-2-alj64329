import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props){
    super(props)
  }

  handleAddTodo(item){
    this.props.todoContext.addTodo(item)
  }


  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `

    addElement.querySelector('#todo-add-btn').addEventListener('click', ()=> {
      const item = addElement.querySelector("#todo-input").value
      this.handleAddTodo(item)
      addElement.querySelector("#todo-input").value=""
    })

    return addElement;
  }
}