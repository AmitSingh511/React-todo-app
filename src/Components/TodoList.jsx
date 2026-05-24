import "../TodoList.css";
import { useState } from "react";
function TodoList({ todos, deleteTodo, completeTodo, editTodo }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  function handleEditClick(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }
  function handleSave(id) {
    if (editText.trim() === "") return;
    editTodo(id, editText);
    setEditingId(null);
  }
  function handleCancel() {
    setEditingId(null);
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          {editingId === todo.id ? (
            <>
              <input
                className="edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSave(todo.id);
                  if (e.key === "Escape") handleCancel();
                }}
                autoFocus
              />
              <button className="btn-save" onClick={() => handleSave(todo.id)}>
                Save
              </button>
              <button className="btn-cancel" onClick={handleCancel}>
                ✕
              </button>
            </>
          ) : (
            <>
              <span
                className={`todo-text ${todo.completed ? "completed" : ""}`}
              >
                {todo.text}
              </span>
              <button
                className="btn-complete"
                onClick={() => completeTodo(todo.id)}
              >
                ✓
              </button>
              <button
                className="btn-edit"
                onClick={() => handleEditClick(todo)}
              >
                edit
              </button>
              <button
                className="btn-delete"
                onClick={() => deleteTodo(todo.id)}
              >
                delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
