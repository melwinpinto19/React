import { useRef, useState } from "react";

function EachTask({ item, index, showData }) {
  const [read, readOnly] = useState(true);
  let [task, setTask] = useState(item);
  const [saveJSX, setSaveJSX] = useState("");
  let taskVal = useRef("");

  function remove() {
    let data = JSON.parse(localStorage.getItem("task"));
    data.splice(
      data.findIndex((each) => each === item),
      1
    );
    localStorage.setItem("task", JSON.stringify(data));
    showData(data);
  }
  function Save() {
    console.log(taskVal.current);

    let data = JSON.parse(localStorage.getItem("task"));
    let i = data.findIndex((ele) => ele === item);
    data[i] = taskVal.current;
    localStorage.setItem("task", JSON.stringify(data));
    console.log(data);
    setSaveJSX("");
    readOnly(true);
    item = taskVal.current;
  }
  function fun(e) {
    setTask(e.target.value);
    taskVal = e.target.value;
  }
  return (
    <>
      <div className="flex justify-center items-center gap-8 ">
        <input
          type="text"
          className="bg-purple-800 py-2 px-4 w-64 flex justify-center items-center text-center"
          value={task}
          onChange={(e) => {
            fun(e);
          }}
          readOnly={read}
        />
        <div
          className="bg-red-500 w-16 h-8 flex justify-center items-center"
          onClick={remove}
        >
          Remove
        </div>
        <div
          className="bg-green-500 w-16 h-8 flex justify-center items-center"
          onClick={() => {
            readOnly(false);
            setSaveJSX(
              <div
                className="bg-blue-600 w-16 h-8 flex justify-center items-center"
                onClick={Save}
              >
                Save
              </div>
            );
          }}
        >
          Edit
        </div>
        {saveJSX}
      </div>
    </>
  );
}

export default EachTask;
