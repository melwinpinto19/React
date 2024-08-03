import { useState, useEffect } from "react";
import EachTask from "./EachTask";

function App() {
  const [task, setTask] = useState("");
  let temp =
    localStorage.getItem("task") == null
      ? []
      : JSON.parse(localStorage.getItem("task"));
  const [data, setData] = useState(temp);

  function addTask(task) {
    if (localStorage.getItem("task") !== null) {
      let data1 = JSON.parse(localStorage.getItem("task"));
      data1.push(task);
      // data1.push(<div className="bg-blue-600 px-2 py-4 w-16">{task}</div>);
      console.log(data1);
      localStorage.setItem("task", JSON.stringify(data1));
      setData(data1);
    } else {
      localStorage.setItem("task", JSON.stringify([task]));
      console.log([task]);
      setData([task]);
      // setData([<div className="bg-blue-600 px-2 py-4 w-16">{task}</div>]);
    }
  }

  function save() {
    if (task == "") {
      alert("Field is Empty");
    } else {
      addTask(task);
    }
  }

  return (
    <>
      <div className="w-full bg-red-600 min-h-screen flex justify-center items-center font-mono text-white ">
        <div className="w-2/4 h-3/4 bg-black rounded-xl py-4">
          <h2 className="text-center text-white text-2xl">
            TSX - An tool to make your life easy
          </h2>
          <div className="mt-8 flex items-center justify-center w-52 m-auto gap-8">
            <input
              type="text"
              className="px-4 py-2 w-96 text-black outline-none border-none"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <div className="bg-blue-600 rounded-full px-4 py-2" onClick={save}>
              save
            </div>
          </div>
          <div className="">
            <h2 className="text-center text-lg mt-8 mb-8 ">Added Task Items</h2>
            <div className="w-full flex flex-col gap-4 items-center justify-center text-white ">
              {data.map((ele, index) => (
                <EachTask item={ele} index={index} showData={setData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
