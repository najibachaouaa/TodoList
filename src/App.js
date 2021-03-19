import React,{useState} from 'react'
import './App.css';
import Header from './componenets/Header';
import Form from './componenets/form';
import TodosList from './componenets/todosList';
const  App= ()=> {
  const[input,setInput]= useState("")
  const[todos,setTodos]= useState([])
  const[editTodo,setEdit]= useState(null)
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          
      <Header></Header>
        </div>
        <div>
          <Form input={input} setInput={setInput}todos={todos} setTodos={setTodos} editTodo={editTodo} setEdit={setEdit}></Form>
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} editTodo={editTodo} setEdit={setEdit} />
        </div>
      </div>

    </div>
  );
}

export default App;
