import { useState } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  function addTodo() {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  }
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i != index); //only care about i(position) not the todo(item)
    setTodos(updatedTodos);
  };
  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  };
  return (
    <>
      <div
        className=""
        style={{
          background: "linear-gradient(135deg, #141e30, #243b55)",
        }}
      >
        <div className="container-fluid vh-100 vw-100 d-flex justify-content-center-start p-5 flex-column">
          <h1 className="text-center fs-2 fw-bold font-monospace text-white">
            TODO APP
          </h1>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2 ">
            <input
              type="text"
              className="form-control w-25"
              id="formGroupExampleInput"
              placeholder="Enter your task here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button type="button" className="btn btn-primary" onClick={addTodo}>
              Add Task
            </button>
          </div>
          <div className="d-flex justify-content-center ">
            <ul
              className="list-group w-50 mt-5 overflow-auto no-scrollbar gap-2"
              style={{
                maxHeight: "350px",
              }}
            >
              {todos.map((todo, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center rounded-3 "
                  key={todo.id}
                >
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-success"
                      onClick={() => toggleComplete(index)}
                    >
                      {todo.completed ? "Undo" : "Done"}
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTodo(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
