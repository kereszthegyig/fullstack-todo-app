import React, {Component} from 'react';
import * as helpers from "./api";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "./TodoList.css";


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        
        this.createTodo = this.createTodo.bind(this);
        //this.editTodo = this.editTodo.bind(this);
    }
    
    componentWillMount(){
        this.loadTodos();
    }
    
    async loadTodos(){
        let todos = await helpers.getTodos();
        this.setState({todos});
    }
    async createTodo(val){
        let newTodo = await helpers.createTodo(val);
        this.setState({todos: [...this.state.todos, newTodo]});
    }
    
    async editTodo(id, newName){
        let editedTodo = await helpers.editTodo(id, newName);
        const todos = this.state.todos.map(t => 
        (t._id === editedTodo._id) ? 
            {...t, name: editedTodo.name} 
            : t
        );
        this.setState({todos: todos});
    }
    
    async updateTodo(todo){
        let updatedTodo = await helpers.updateTodo(todo);
        const todos = this.state.todos.map(t => 
            (t._id === updatedTodo._id) ?
                {...t, completed: !t.completed}
                : t
        );
        this.setState({todos: todos});
    }
    async deleteTodo(id){
       await helpers.removeTodo(id);
       let todos = this.state.todos.filter(todo => todo._id !== id);
       this.setState({todos: todos});
    }

    
    render(){
        const todos = this.state.todos.sort((a,b) =>{
           if (a.create_date > b.create_date) {
                    return -1;
                  }
            if (a.create_date < b.create_date) {
                    return 1;
                  }
            return 0;
        }).map((todo) => (
            
            <TodoItem 
                key={todo._id}
                {...todo}
                onToggle = {this.updateTodo.bind(this, todo)}
                onDelete = {this.deleteTodo.bind(this, todo._id)}
                onEdit = {this.editTodo.bind(this, todo._id)}
            />
        ));
        return(
            <div className="todoList">
            <header>
                <h1 className="header"> app <b>t</b>odo</h1>
                <h2>A simple todo list app built with React and NodeJS</h2>
            </header>
                <div className="container">
                    <TodoForm addTodo = {this.createTodo}/>
                    <ul>
                        {todos}
                    </ul>
                </div>
            <footer>
                <h4>React / NodeJs</h4>
            </footer>
            </div>
        );
    }
}

export default TodoList;