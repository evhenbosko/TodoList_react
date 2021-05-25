import React,{useState} from'react'
import PropTypes from 'prop-types'
const AddTodo=({onCreate})=>{
    const[value,setvalue]=useState('')


{
    
}

  const submitHandler=(event)=>{
      event.preventDefault() 
      if (value.trim()){
        onCreate(value)
        setvalue('')
      }

  }  
   return(
   <form onSubmit={submitHandler}>
       <input value={value} onChange={event=>setvalue(event.target.value)}/>
       <button type="submit">Добавить Задание</button>
       <select name="todos" className="filter-todo">
        <option value="all">Все</option>
        <option value="completed">Выполненные</option>
        <option value="uncompleted">Невыполненные</option>

    </select>
   
   </form>
    )
}               
 
AddTodo.propTypes={
    onCreate:PropTypes.func.isRequired
}
export default AddTodo