export class TodoContext {
    static id =0

    constructor(){
        this.todos= []
        this.listners=[]
    }

    getTodos(){
        return this.todos
    }

    addTodo(todo){
        TodoContext.id++
        this.todos.push({            
            id: TodoContext.id,
            todo: todo,
            completed: false
        })

        this.notifyListeners()
    }

    completeTodo(id){
        this.todos.forEach(todo => {
            if(todo.id === id){
                todo.completed =!todo.completed
            }}
        )

        this.notifyListeners()
    }
    
    deleteTodo(id){
        this.todos = this.todos.filter(el => el.id !== id)

        this.notifyListeners()
    }

    subscribe(listner){
        this.listners.push(listner)
    }

    notifyListeners(){
        this.listners.forEach(listener=> {
            listener(this.todos)})
    }
}