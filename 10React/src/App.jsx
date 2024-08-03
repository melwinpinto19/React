import { useState, useCallback, useEffect, useRef, React } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowCharacters, setAllowCharacters] = useState(false);

  const passwordRef = useRef();

  const items = [1, 2, 3, 4];

  const fun = () => {
    // alert("hello");
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNumbers) str += "0123456789";
    if (allowCharacters) str += "!@#$%^&&*";
    let ans = "";

    for (let i = 0; i < length; i++) {
      ans = ans + str[Math.floor(Math.random() * str.length + 1)];
    }

    setPassword(ans);
  };
  const fun1 = useCallback(fun, [length, allowNumbers, allowCharacters]);

  useEffect(fun1, [length, allowNumbers, allowCharacters]);

  const copyText = () => {
    passwordRef.current.select(0, 3);
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="h-1/4 w-2/5 bg-red-300 rounded-md font-sans py-4 px-16">
        <h2 className="text-center text-black mb-4 text-2xl font-bold">
          Password Generator
        </h2>
        <input
          type="text"
          className=" w-64 px-1 py-2 outline-none border-none"
          placeholder="password"
          readOnly
          value={password}
          ref={passwordRef}
        />
        <span className="ml-4">Length :{length}</span>
        <span
          className="ml-5 bg-blue-700 rounded-full px-4 py-2"
          onClick={copyText}
        >
          Copy
        </span>
        <br />
        <input
          type="range"
          name=""
          id=""
          min="1"
          max="20"
          value={length}
          className="mt-4 w-64"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <br />
        <input
          type="checkbox"
          name=""
          id="num"
          checked={allowNumbers}
          className="mr-4"
          onChange={() => setAllowNumbers(!allowNumbers)}
        />
        <label htmlFor="num">Numbers</label>
        <input
          type="checkbox"
          name=""
          id="char"
          className="mx-4"
          value={allowCharacters}
          onChange={() => setAllowCharacters(!allowCharacters)}
        />
        <label htmlFor="char">characters</label>
      </div>
      <div></div>
    </>
  );
}

export default App;
