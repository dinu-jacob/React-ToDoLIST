import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now() ,text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      {
      toDos.map((obj)=>{
       return( <div className="todos">
        <div className="todo"> 
          <div className="left">
            <input onChange={(e)=>{
              setTodos(toDos.filter(obj2 => {
                if(obj2.id === obj.id){
                    obj2.status = e.target.checked  
                  } 
                  return obj2
               }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            
          <i onClick={() => {
    const updatedTodos = toDos.filter(todo => todo.id !== obj.id);
    setTodos(updatedTodos);
}} className="fas fa-times"></i>
          </div>
        </div>
      </div> )
    })}
    {toDos.map((obj)=>{
      if(obj.status){
        return (<h1>{obj.text}</h1>)
      }
      return null
    })}
    </div>
  );
}

export default App;