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
   </form>
    )
}               
 
AddTodo.propTypes={
    onCreate:PropTypes.func.isRequired
}
export default AddTodo