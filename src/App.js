import { useState } from "react";
import "./App.scss";
import TodoList from "./Components/TodoList/index";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Reading Book" },
    { id: 2, title: "Play football" },
    { id: 3, title: "Play chess" },
  ]);

  function handleTodo(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React Hooks todolist</h1>
      <TodoList todos={todoList} onTodoClick={handleTodo} />
    </div>
  );
}

export default App;
