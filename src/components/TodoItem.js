import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(item)
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"

      todoElement.innerHTML=`
      ${this.item.item.todo}
      <div>
      <button class="complete-btn">${item.completed ? "Mark Incomplete":"Mark Complete"}</button>
      <button class="delete-btn">Delete</button>
      </div>
      `

    return todoElement
  }
}