
import React,{useState,useEffect} from'react'
import './App.css'
import Context from './Context'
import AddTodo from './Components/AddTodo'
import Loader from './Loader'
import Loader2 from'./loader2'
const TodoList=React.lazy(()=>
new Promise(resolve =>{
  setTimeout(()=>{
    resolve(import('./Components/TodoList'))
  },0)
}))
const App=()=> {
  let [todo,setTodo]=React.useState([
    // {id:1,completed:true,title:'set1'},
    // {id:2,completed:false,title:'set2'},
    // {id:3,completed:true,title:'set3'}
  ])
  const [loading,setloading]=React.useState(true)
       useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
             .then(response => response.json())
             .then(todo => {
               setTimeout(()=>{
                 setTodo(todo) 
                 setloading(false)}
                 ,0)
               
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
  
   
      {todo.length?
       <React.Suspense fallback={<p>loading components <Loader2/></p>}> 
       
      <TodoList todos={todo} onToggle={toggleTodo}/>
      </React.Suspense>:

      (loading? null:<p>No todo</p>)}
        {loading && <p>loading from server<Loader/></p>}
    </div>
    </Context.Provider>
  );
}

export default App;
