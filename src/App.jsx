import "./App.css";
import { useState, useEffect } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  }); // state lives HERE now
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function deleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id != id);
    setTodos(updatedTodos);
  }
  function completeTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  function editTodo(id, newText) {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodo);
  }
  return (
    <div className="app-container">
      <div className="app-header">
        <div className="app-icon">✅</div>
        <div>
          <div className="app-title">my.todos</div>
          <div className="app-subtitle">stay on top of it all</div>
        </div>
      </div>
      <TodoInput todos={todos} setTodos={setTodos} />
      <div className="stats-row">
        <div className="stat-chip">
          <span>{todos.length}</span>Total
        </div>
        <div className="stat-chip">
          <span>{todos.filter((t) => t.completed).length}</span>Done
        </div>
        <div className="stat-chip">
          <span>{todos.filter((t) => !t.completed).length}</span>Remaining
        </div>
      </div>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
