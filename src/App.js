
import React,{useState,useEffect} from'react'
import TodoList from './Components/TodoList'
import './App.css'
import Context from './Context'
import AddTodo from './Components/AddTodo'
const App=()=> {
  let [todo,setTodo]=useState([
    {id:1,completed:true,title:'set1'},
    {id:2,completed:false,title:'set2'},
    {id:3,completed:true,title:'set3'}
  ])
       useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
             .then(response => response.json())
             .then(todo => {
               setTodo(todo)
             })
       },[])
       function toggleTodo(id){
         setTodo(todo.map(todos=>{ 
           if (todos.id===id ){
             todos.completed=!todos.completed
           }
           return todos
         }))

       }
       const removeTodo=(id)=>{
         setTodo(todo.filter(todos=>todos.id!==id))

       }
       const addTodo=(title)=>{
         setTodo(todo.concat([{
           title,
           id:Date.now(),
           completed:false
         }]))
       }
  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper" >
      <h1>СПИСОК ДЕЛ</h1>
    <AddTodo onCreate={addTodo}/>
      {todo.length?<TodoList todos={todo} onToggle={toggleTodo}/>:<p>No todo</p>}
    </div>
    </Context.Provider>
  );
}

export default App;
