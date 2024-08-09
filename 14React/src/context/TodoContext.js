import { createContext } from "react";

const TodoContext = createContext({
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  editTodo: (todo) => {},
  checkDone: (id, check) => {},
});

export default TodoContext;
