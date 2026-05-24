import "../TodoInput.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function TodoInput({ todos, setTodos }) {
  //props coming from parent(App)
  const [inputText, setInputtext] = useState("");
  //const [todos, setTodos] = useState([]);
  function addTask() {
    if (inputText.trim() === "") return;
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: uuidv4(), text: inputText, completed: false },
    ]);
    setInputtext("");
  }
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputText}
        placeholder="Enter the Task..."
        onChange={(e) => setInputtext(e.target.value)}
      />
      <button type="submit" onClick={addTask}>
        ADD
      </button>
    </div>
  );
}
export default TodoInput;
