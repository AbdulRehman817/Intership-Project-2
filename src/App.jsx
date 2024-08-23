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
function App() {

const[text,setText]=useState('')
const[todo,setTodo]=useState([])
function addTodo(e){
e.preventDefault()
setTodo([...todo,text])
console.log(todo);

}
function change(){
const inp=document.getElementById("inp")
setText(inp.value)
console.log(inp.value)
inp.value=''
}
  return(
<>
<h1>Todo</h1>
<form onSubmit={addTodo}>
<input type="text" placeholder='enter text' id='inp'/>
<button onClick={change}>AddTodo</button>
</form>
<ul>
{todo.map((item,index)=>{
  return <li key={index}>{item}</li> 
})}
</ul>
</>
  )
  
}

export default App
