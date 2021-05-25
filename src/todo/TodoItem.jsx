import React,{useContext} from'react';
import './TodoItem.css';
import PropTypes from'prop-types';
import Context from'../Context'
const TodoItem=({todo,index,onChange})=>{
  const {removeTodo} =useContext(Context)
    const classes=[]
if (todo.completed){
    classes.push('done')
}

  return(
     
        <li>  
               
        <span className={classes.join('')}> 
     
            <input checked={
                todo.completed} 
                type='checkbox' 
                onChange={()=>onChange(todo.id)}/>
            <strong>{index+1}
           
            </strong>
            {todo.title}
        </span>
      
        <button onClick={removeTodo.bind(null,todo.id)}>&times;</button>
      </li>
    )
}
TodoItem.prototype={
    todo:PropTypes.object.isRequired,
    index:PropTypes.number,
    onChange:PropTypes.func.isRequired
}
export default TodoItem