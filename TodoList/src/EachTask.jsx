import { useEffect, useRef, useState } from "react";

function EachTask({ item, index, showData }) {
  const [read, readOnly] = useState(true);
  let [task, setTask] = useState(item);
  const [saveJSX, setSaveJSX] = useState("");
  let taskVal = useRef(item);
  let itemVal = useRef(item);
  let [underline, setUnderline] = useState("");
  let [done, setDone] = useState(false);

  useEffect(() => {
    if (done === true) setUnderline("line-through");
    else setUnderline("");
  }, [done]);

  function remove() {
    let data = JSON.parse(localStorage.getItem("task"));
    data.splice(
      data.findIndex((each) => each === itemVal.current),
      1
    );
    localStorage.setItem("task", JSON.stringify(data));
    showData(data);
  }
  function Save() {
    console.log(taskVal.current);

    let data = JSON.parse(localStorage.getItem("task"));
    let i = data.findIndex((ele) => ele === itemVal.current);
    data[i] = taskVal.current;
    localStorage.setItem("task", JSON.stringify(data));
    console.log(data);
    itemVal.current = taskVal.current;
    setSaveJSX("");
    readOnly(true);
  }
  function fun(e) {
    setTask(e.target.value);
    taskVal.current = e.target.value;
  }
  return (
    <>
      <div className="flex justify-center items-center gap-8 ">
        <label htmlFor="check">Done</label>
        <input
          type="checkbox"
          name="check"
          id=""
          value="Done"
          checked={done}
          onChange={() => {
            setDone((prev) => !prev);
          }}
        />
        <input
          type="text"
          className={`bg-purple-800 py-2 px-4 w-64 flex justify-center items-center text-center ${underline}`}
          value={task}
          onInput={(e) => {
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
