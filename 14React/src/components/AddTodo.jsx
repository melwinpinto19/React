import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function AddTodo() {
  const { addTodo } = useContext(TodoContext);

  const [todo, setTodo] = useState("");

  return (
    <div className="w-2/5 h-16 bg-slate-500 rounded-lg flex justify-between items-center px-16">
      <input
        type="text"
        className="w-96 outline-none border-none p-2"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div
        className="bg-blue-700 rounded-full grid place-items-center px-6 py-2"
        onClick={() => {
          addTodo({ id: Date.now(), todo: todo, checked: false });
        }}
      >
        Add
      </div>
    </div>
  );
}

export default AddTodo;
