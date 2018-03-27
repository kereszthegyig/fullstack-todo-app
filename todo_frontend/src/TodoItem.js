import React, {Component} from 'react';
import EditForm from './EditForm'
import "./TodoItem.css";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrashAlt';
import faEdit from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faEdit2 from '@fortawesome/fontawesome-free-solid/faChevronCircleUp';




class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state= {
            showForm: false
        };
        this.onHideForm = this.onHideForm.bind(this);
       
    }
    
    onHideForm(){
        this.setState({showForm: false})
    }
    
    
    render(){
        const trashIcon = faTrash;
        const editIcon = faEdit;
        const editIcon2 = faEdit2;
        const {id, name, completed, onDelete, onToggle, onEdit} = this.props;
        let {showForm} = this.state;
        return(
            <div className="todoItem">
                <li>
                    <span className="text"
                        style={{
                            textDecoration: completed ? "line-through" : "none"
                        }}
                        onClick = {onToggle}
                    >
                        {name}
                    </span>
                    <span 
                        className="btn"
                        onClick = {() => this.setState({showForm: !showForm})}> 
                        {!showForm ? <FontAwesomeIcon icon={editIcon}/> : <FontAwesomeIcon icon={editIcon2} /> }
                    </span>
                    <span 
                        className="btn"
                        onClick = {onDelete}>
                        <FontAwesomeIcon icon={trashIcon} />
                    </span>
                </li>
                {showForm ?  <EditForm key={id} id={id} name={name} editTodo={onEdit} hideForm={this.onHideForm}/> : null}
               
            </div>
            )
    }
}

export default TodoItem;