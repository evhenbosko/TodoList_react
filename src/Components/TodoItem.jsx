import React from'react';
import './TodoItem.css';
import PropTypes from'prop-types';

const TodoItem=(props)=>{
    return(
        <li>    
        <span>
            <input type='checkbox'/>
            <strong>{props.index+1}</strong>
            {props.todo.title}
            <img src={props.todo.thumbnailUrl}/> 
        </span>
        <button>&times;</button>
      </li>
    )
}
TodoItem.prototype={
    todo:PropTypes.object.isRequired,
    index:PropTypes.number
}
export default TodoItem