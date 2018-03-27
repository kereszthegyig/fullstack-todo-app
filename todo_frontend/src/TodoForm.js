import React, {Component} from 'react';
import "./TodoForm.css"

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {inputValue: ""};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = function(e){
        this.setState({inputValue: e.target.value})
    }
    
    handleSubmit = function(e){
        e.preventDefault()
        this.props.addTodo(this.state.inputValue)
        this.setState({inputValue: ""})
    }
    
    render(){
        
        return(
            <div className="todoForm">
                <form onSubmit = {this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Insert your task here..."
                        value={this.state.inputValue}
                        onChange = {this.handleChange}
                    />
                    <button
                    type = "submit"
                        //onClick = {this.handleSubmit}
                    >
                    Add Todo
                    </button>
                </form>
            </div>
        )
    }
}
export default TodoForm
    
