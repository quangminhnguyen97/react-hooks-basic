import { useState, useEffect } from "react";
import "./App.scss";
import TodoList from "./Components/TodoList/index";
import TodoForm from "./Components/TodoForm/index";
import PostList from "./Components/PostList/index";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Reading Book" },
    { id: 2, title: "Play football" },
    { id: 3, title: "Play chess" },
  ]);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log("Error");
      }
    }
    fetchPostList();
  }, []);

  function handleTodo(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoForm(formValue) {
    const newTodo = {
      id: todoList.length + 1,
      title: formValue.title,
      // C2
      // ...formValue,
    };
    const newTodoList = [...todoList];
    console.log(newTodo);
    console.log(newTodoList);
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React Hooks PostList</h1>
      <PostList posts={postList} />
      {/* <TodoForm onSubmited={handleTodoForm} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodo} /> */}
    </div>
  );
}

export default App;
