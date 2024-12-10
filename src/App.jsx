import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  let [text, setText] = useState("");
  let [todo, setTodo] = useState([]);
  function submit(e) {
    e.preventDefault();
    setTodo([...todo]);
    // todo.push()
    console.log(todo);
  }
  function change() {
    if (!inp.value) {
      return;
    } else {
      const inp = document.querySelector("#inp");
      todo.push(inp.value);
      // console.log(setText)
      console.log(inp.value);
      inp.value = "";
      // text(inp.value)
    }
  }
  function deleteTodo(index) {
    todo.splice(index, 1);
    console.log(index);
    setTodo([...todo]);
  }
  function editTodo(index) {
    let editVal = prompt("Enter edit value");
    // todo[index]=editVal
    todo.splice(index, 1, editVal);
    console.log(todo);

    setTodo([...todo]);
  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={submit}>
        <input type="text" placeholder="Enter text" id="inp" />
        <button onClick={change}>Submit</button>
      </form>
      <ul>
        {todo.map((value, index) => {
          return (
            <li className="value" key={index}>
              {value} <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
