import React,{useState,useEffect} from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [todos, setTodos] = useState([
        {id:1, text: 'Learn React', state: false},
        {id:2, text:'Build a React app', state: false },
        {id:3, text:'Deploy the React app', state: false }
    ])

    const [todosId, setTodosId] = useState("")
    // console.log(todosId)
    let filteredItem = todos.map((value)=>{
       if(value.id===todosId){
        value.state = true;
       }
       return value
    })
    useEffect(()=>{
      setTodos(filteredItem)
    },[]) 
    // console.log(filteredItem)
    

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent todos={todos} setTodosId={setTodosId}/>
    </div>
  )
}

export default ParentComponent
