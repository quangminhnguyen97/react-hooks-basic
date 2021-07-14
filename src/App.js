import { useState, useEffect } from "react";
import "./App.scss";
import queryString from "query-string";
import TodoList from "./Components/TodoList/index";
import TodoForm from "./Components/TodoForm/index";
import PostList from "./Components/PostList/index";
import Pagination from "./Components/Pagination";
import PostFilterForm from "./Components/PostFilterForm/index"
import axios from "axios";
import Clock from './Components/Clock/index';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Reading Book" },
    { id: 2, title: "Play football" },
    { id: 3, title: "Play chess" },
  ]);

  const [postList, setPostList] = useState([]);

  // Phan trang
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  useEffect(() => {
    async function fetchPostList() {
      const paramString = queryString.stringify(filter);
      axios
        .get(`http://js-post-api.herokuapp.com/api/posts?${paramString}`)
        .then(function (response) {
          const { data, pagination } = response.data;
          setPostList(data);
          setPagination(pagination);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
    }
    fetchPostList();
  }, [filter]);

  // Delete todo
  function handleTodo(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  // Add todo
  function handleTodoForm(formValue) {
    const newTodo = {
      id: todoList.length + 1,
      title: formValue.title,
      // C2
      // ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFilterChange(newFilter) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm
    });
  }

  return (
    <div className="app">
      <h1>React Hooks Clock</h1>
      <Clock />
      {/* <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
      {/* <TodoForm onSubmited={handleTodoForm} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodo} /> */}
    </div>
  );
}

export default App;
