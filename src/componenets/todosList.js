import React from 'react'

const TodosList = ({todos,setTodos,editTodo,setEdit}) => {
    console.log("list todos",todos)
    const handledelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id!==id))

    }
    const handleComplete=(todo)=>{
        setTodos(todos.map((item)=>{
            if(item.id!==todo.id){
                return {...item,completed:!item.completed}
            }
            return item;
        }))

    }
    const handleEdit=({id})=>{
     
        const findTodo=todos.find((todo)=>todo.id===id)
        setEdit(findTodo)
        console.log("hooo",findTodo)
    }
    return (
        <div style={{color:"white"}}>
           {todos.map((todo)=>(
               <li className="list-item">
                   <input type="text"  value={todo.title} onChange={(e)=>e.preventDefault() }/>
                   &nbsp;&nbsp;&nbsp;
                   <div>
                     <button className="btn btn-primary" onClick={()=>handleComplete(todo)}> 
                   done
                </button>
                &nbsp;&nbsp;&nbsp;
                <button className="btn btn-success"  onClick={()=>handleEdit(todo)}>
                  edit
                </button>
                &nbsp;&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={()=>handledelete(todo)}>
                   delete
                </button>
                &nbsp;&nbsp;&nbsp;
                </div>
               
                </li>
               
           )

           )}
        </div>
    )
}

export default TodosList
