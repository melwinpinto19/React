import { useEffect, useState } from "react";
import TodoContext from "./context/TodoContext";
import AddTodo from "./components/AddTodo";
import TodoViewer from "./components/TodoViewer";

function App() {
  const [todos, setTodos] = useState([]);

  // loading the todoItems during the first load :
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todoItems")));
  }, []);

  // addTodo: todo = {todo,id,checked}
  const addTodo = (todo) => {
    let data = [...todos, todo];
    setTodos(data);
    localStorage.setItem("todoItems", JSON.stringify(data));
  };

  // removeTodo :
  const removeTodo = (id) => {
    let data = todos.filter((eachTodo) => eachTodo.id !== id);
    setTodos(data);
    localStorage.setItem("todoItems", JSON.stringify(data));
  };

  // editTodo :
  const editTodo = (todo) => {
    let data = todos.map((eachTodo) =>
      eachTodo.id === todo.id ? todo : eachTodo
    );
    setTodos(data);
    localStorage.setItem("todoItems", JSON.stringify(data));
  };

  // checkDone :

  const checkDone = (id, check) => {
    let data = todos.map((eachTodo) =>
      eachTodo.id === id ? { ...eachTodo, checked: check } : eachTodo
    );
    setTodos(data);
    localStorage.setItem("todoItems", JSON.stringify(data));
  };

  return (
    <TodoContext.Provider value={{ addTodo, editTodo, removeTodo, checkDone }}>
      <AddTodo />
      {todos.map((eachTodo) => (
        <div key={eachTodo.id}>
          <TodoViewer todoItems={eachTodo} />
        </div>
      ))}
    </TodoContext.Provider>
  );
}

export default App;
