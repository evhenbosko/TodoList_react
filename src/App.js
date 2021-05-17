
import React,{useState,useEffect} from'react'
import TodoList from './Components/TodoList'
import './App.css'
const App=()=> {
  let [todo,setTodo]=useState([
    {id:1,completed:true,title:'set1'},
    {id:2,completed:true,title:'set2'},
    {id:3,completed:true,title:'set3'}
  ])
       useEffect(()=>{
         fetch('http://jsonplaceholder.typicode.com/photos?_limit=150')
             .then(response => response.json())
             .then(todo => {
               setTodo(todo)
             })
       },[])
  return (
    <div className="wrapper" onClick={()=>setTodo(todo+1)}>
      <h1>СПИСОК ДЕЛ</h1>

      <TodoList todos={todo}/>
    </div>
  );
}

export default App;
