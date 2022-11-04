import AddTodo from "./components/add_todo.js";
export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();

        this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
    }
    setModel(model){
        this.model = model;
    }
    addTodo(title, description){
        this.model.addTodo(title, description);
    }
}