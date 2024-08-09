import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   console.log(username, password);
  const { setUser } = useContext(UserContext);

  const HandleClick = (e) => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <>
      <div style={{ backgroundColor: "blue", height: "50vh", width: "100vw" }}>
        <form action="">
          UserName:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          Password:{" "}
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Login" onClick={HandleClick} />
        </form>
      </div>
    </>
  );
}

export default Login;
