import React, { useState } from 'react'

const ChildComponent = ({todos,setTodosId}) => {
  // const [disabled, setDisabled] = useState({display: 'inline'})
  function onClickHandler(id, target){
    setTodosId(id);
    target.style.display = 'none' 
    // console.log(todos)
   }
  return (
    <div>
      <ul>
        <h2>Child Component</h2>
        {/* map through todos and render them */}
       
        {
            // if we have a todo, then show it's text. If not, say so!
            todos.map((value)=>{
                return (
                    <li  key={value.id} >{value.text} <button  onClick={(event)=>onClickHandler(value.id, event.target)}>Complete</button></li>
                )
            })
        }
         
      </ul>
    </div>
  )
}

export default ChildComponent
