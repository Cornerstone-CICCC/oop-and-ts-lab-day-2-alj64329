import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {

  constructor(props){
    super(props)
    this.state = {
      todos:[]
    }
    this.updateTodo = this.updateTodo.bind(this)
    this.props.todoContext.subscribe(this.updateTodo) 
    this.todoListElement = null
  }

  
  handleComplete(id){
    this.props.todoContext.completeTodo(id)
  }
  handleDelete(id){
    this.props.todoContext.deleteTodo(id)
  }

  updateTodo(todos){
    this.state.todos = todos
    this.todoListElement.innerHTML =""

    this.state.todos.forEach(item =>{
      const li = document.createElement('li')
      if(item.completed){
        li.classList.add('completed')
      }
    
      li.innerHTML =`
      <span>${item.todo}</span>
      <div>
      <button class="complete-btn">${item.completed ? "Mark Incomplete":"Mark Complete"}</button>
      <button class="delete-btn">Delete</button>
      </div>
      `

      const completeBtn = li.querySelector(".complete-btn")
      const deleteBtn = li.querySelector(".delete-btn")

      completeBtn.addEventListener('click',()=>{
        this.handleComplete(item.id)
      })

      deleteBtn.addEventListener('click',()=>{
        this.handleDelete(item.id)
      })

      
      this.todoListElement.appendChild(li)
    })
  }

  render() {
    this.todoListElement = document.createElement('div')
    this.todoListElement.className = "todo-list"

    const ul = document.createElement('ul')
      this.state.todos.forEach(item =>{
      const todoItem = new TodoItem({
      item,
      todoContext: this.props.todoContext
    }).render()
      ul.appendChild(todoItem)
    })

    this.todoListElement.appendChild(ul)
    
    return this.todoListElement;
  }
}