import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EachPassword({ data, save, remove }) {
  const { url, username, password, $id } = data;
  const [Url, setUrl] = useState(url);
  const [Username, setUsername] = useState(username);
  const [Password, setPassword] = useState(password);
  const [toggle, setToggle] = useState("Edit");

  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();

  const edit = () => {
    if (toggle == "Edit") {
      ref1.current.readOnly = false;
      ref2.current.readOnly = false;
      ref3.current.readOnly = false;

      setToggle("Save");
    } else {
      save($id, { Url, Username, Password });
    }
  };

  return (
    <>
      {/* <div className="">{`${url}->${$id}`}</div> */}
      <div
        className="bg-red-200 m-h-60 w-96 rounded-lg p-4 flex flex-col gap-6 text-pretty text-xl font-sans"
        key={$id}
      >
        <div className="">
          URL :{" "}
          <input
            type="url"
            className="bg-transparent w-4/5"
            value={Url}
            onChange={(e) => setUrl(e.target.value)}
            ref={ref1}
            readOnly={true}
          />{" "}
        </div>
        <div className="">
          username :{" "}
          <input
            type="text"
            className="bg-transparent w-4/5"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            ref={ref2}
            readOnly={true}
          />
        </div>
        <div className="">
          password :{" "}
          <input
            type="password"
            className="bg-transparent w-4/5"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            ref={ref3}
            readOnly={true}
          />
        </div>
        <div className="flex gap-4">
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          <button
            className="bg-blue-600 rounded-sm w-52 py-1 px-2 flex items-center justify-center"
            onClick={edit}
          >
            <lord-icon
              src="https://cdn.lordicon.com/wuvorxbv.json"
              trigger="loop"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>{" "}
            {toggle}
          </button>
          <button
            className="bg-red-600 rounded-sm w-52 py-1 px-2 flex items-center justify-center gap-4"
            onClick={() => remove($id)}
          >
            <lord-icon
              src="https://cdn.lordicon.com/drxwpfop.json"
              trigger="loop"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>{" "}
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default EachPassword;
