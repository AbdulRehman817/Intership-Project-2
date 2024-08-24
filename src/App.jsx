import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//   const [text, setText] = useState("")
//   const [todo,setTodo]=useState([])
//   function addTodo(e){
// e.preventDefault()
// console.log(text);
// setTodo([...todo,text])
// console.log(todo);

// setText("")

// }
// const change=(eve)=>{
//   setText( eve.target.value) 


// }
//   return (
//     <>

//     <h1>Todo App</h1>
//     <form onSubmit={addTodo}>

//     <input type="text"placeholder='Enter Todo' onChange={change} />
//     <button >Add Todo</button>
//     </form>


//     <ul>
//     {todo.map((item,index)=>{
//       return <li key={index}>{item}</li>
//     })}
//     </ul>
//      </>
//   )

// const[text,setText]=useState('')
// const[todo,setTodo]=useState([])
// function addTodo(e){
// e.preventDefault()
// setTodo([...todo,text])
// console.log(todo);

// }
// function change(){
// const inp=document.getElementById("inp")
// setText(inp.value)
// console.log(inp.value)
// inp.value=''
// }
//   return(
// <>
// <h1>Todo</h1>
// <form onSubmit={addTodo}>
// <input type="text" placeholder='enter text' id='inp'/>
// <button onClick={change}>AddTodo</button>
// </form>
// <ul>
// {todo.map((item,index)=>{
//   return <li key={index}>{item}</li> 
// })}
// </ul>
// </>
//   )

function App() {
  let[text,setText]=useState('')
  let[todo,setTodo]=useState([])
  function submit(e){
e.preventDefault()
setTodo([...todo])
// todo.push()
console.log(todo)
  }
  function change(){
    const inp=document.querySelector("#inp")
todo.push(inp.value)
// console.log(setText)
console.log(inp.value)
inp.value=''
// text(inp.value)


  }
  function deleteTodo(index){
    todo.splice(index,1)
    console.log(index)
setTodo([...todo])
  }
  function editTodo(index){
let editVal=prompt('Enter edit value')
todo[index]=editVal
console.log(todo);

setTodo([...todo])

  }

  return(
    <>
    <h1>Todo App</h1>
    <form onSubmit={submit}>
    <input type="text" placeholder='Enter text' id='inp'/>
    <button onClick={change}>Submit</button>
    </form>
    <ul>
      {todo.map((value,index)=>{
      return  <li key={index}>{value}   <button onClick={()=>editTodo(index)}>Edit</button><button onClick={()=>deleteTodo(index)}>Delete</button> </li>
      })}
    </ul>
    </>
  )
}

export default App
