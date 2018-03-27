import React, {Component} from 'react';


class EditForm extends Component {
    constructor(props){
        super(props);
        this.state= {inputValue: this.props.name}
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e){
        this.setState({inputValue: e.target.value})
    }
    
    handleSubmit(e){
        e.preventDefault()
        this.props.editTodo(this.state.inputValue);
        this.props.hideForm()
        
    }
    
    render(){
        //const {editTodo} = this.props;
        //const {name} = this.props;
        return(
            <form  className="editForm" onSubmit = {this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.inputValue}
                    onChange = {this.handleChange}/>
                <button type="submit">Edit</button>
                
            </form>
            )
    }
}

export default EditForm;