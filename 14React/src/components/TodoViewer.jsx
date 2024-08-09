import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";

function TodoViewer({ todoItems }) {
  const { todo, id, checked } = todoItems;
  const { removeTodo, editTodo, checkDone } = useContext(TodoContext);
  const [editVal, setEditVal] = useState("Edit");
  const [readOnly, setReadOnly] = useState(true);
  const [todoItem, setTodoItem] = useState(todo);
  const [checkedItem, setChecked] = useState(checked);

  useEffect(() => {
    checkDone(id, checkedItem);
  }, [checkedItem]);

  const checkEdit = () => {
    if (editVal == "Edit") {
      setReadOnly(false);
      setEditVal("Save");
    } else {
      editTodo({ ...todoItems, todo: todoItem });
      setReadOnly(true);
      setEditVal("Edit");
    }
  };

  return (
    <>
      <div
        className={`flex justify-center items-center gap-8 ${
          checkedItem ? "bg-blue-700" : "bg-amber-400"
        } px-6 py-2`}
      >
        <label htmlFor="check">Done</label>
        <input
          type="checkbox"
          name="check"
          id=""
          checked={checkedItem}
          onChange={() => setChecked((prev) => !prev)}
        />
        <input
          type="text"
          className={`bg-purple-800 py-2 px-4 w-64 flex justify-center items-center text-center `}
          value={todoItem}
          readOnly={readOnly}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <div
          className="bg-red-500 w-16 h-8 flex justify-center items-center"
          onClick={() => removeTodo(id)}
        >
          Remove
        </div>
        <input
          className="bg-green-500 w-16 h-8 flex justify-center items-center pl-2"
          value={editVal}
          onClick={checkEdit}
        />
      </div>
    </>
  );
}

export default TodoViewer;
