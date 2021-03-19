import React,{useEffect} from 'react'
import{v4 as uuidV4} from 'uuid'
const Form = ({input,setInput,todos,setTodos,editTodo,setEdit}) => {
    const handleInputChange=(e)=>{
        setInput(e.target.value)

    }
    const UpdateTodo=(title,id,completed)=>{
        const newTodo =todos.map((todo)=> 
                    todo.id === id ? {title,id,completed} : todo
        );
          setTodos(newTodo);
          setEdit("")
    }
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title)
        }
        else setInput("")
    },[editTodo,setInput])

    
    const onFormSubmit=(e)=>{
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos,{id:uuidV4(),title:input,completed:false}])
            console.log("todos",todos)
            setInput("")
        }
        else UpdateTodo(input,editTodo.id,editTodo.completed)
      

    }
    return (
        <div>
           <form onSubmit={onFormSubmit}>
               <input type="text" placeholder="enter todo ." className="task-input" value={input} onChange={handleInputChange}></input>
               <button className="butoon-add" type="submit">Add todo</button>
               </form> 
        </div>
    )
}

export default Form
