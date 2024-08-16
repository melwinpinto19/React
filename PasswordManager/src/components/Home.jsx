import React, { useState } from "react";
import crudService from "../appwrite/CRUD";

function Home() {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [banner, setBanner] = useState("");
  console.log(username);

  const save = async (e) => {
    e.preventDefault();

    if (url != "" && username != "" && password != "") {
      try {
        let res = await crudService.create(url, username, password);
        if (!res)
          setBanner(
            <div className="absolute top-0 bg-black grid place-items-center w-full text-white h-10 font-mono">
              something went wrong
              <div className="absolute right-4" onClick={() => setBanner("")}>
                X
              </div>
            </div>
          );
        else
          setBanner(
            <div className="absolute top-0 bg-black grid place-items-center w-full text-white h-10 font-mono">
              password added sucessfully !!
              <div className="absolute right-4" onClick={() => setBanner("")}>
                X
              </div>
            </div>
          );
      } catch (error) {
        console.log(error);
      }
    } else {
      setBanner(
        <div className="absolute top-0 bg-black grid place-items-center w-full text-white h-10 font-mono">
          Please fill in the fields properly
          <div className="absolute right-4" onClick={() => setBanner("")}>
            X
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div
        className=" h-4/5 grid place-items-center bg-orange-300 relative"
        style={{ background: "#36C2CE" }}
      >
        {banner}
        <div className="h-3/4 w-3/4 p-4 font-serif">
          <div className=" font-bold capitalize text-center text-4xl">
            Add Password
          </div>
          <div className="mt-8">
            <form action="" className="flex flex-col gap-4 w-3/4 input-box">
              <div className="flex gap-4  items-center justify-between">
                <label htmlFor="url" className="font-semibold text-xl">
                  Enter url :{""}
                </label>
                <input
                  type="url"
                  name=""
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="rounded-full py-2 px-4 w-96  ml-16 outline-none border-none focus:outline-green-600"
                />
              </div>
              <div className="flex gap-4  items-center justify-between">
                <label htmlFor="url" className="font-semibold text-xl">
                  Enter username :{" "}
                </label>
                <input
                  type="text"
                  name=""
                  id="url"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="rounded-full py-2 px-4 w-96 outline-none border-none focus:outline-green-600"
                />
              </div>
              <div className="flex gap-4  items-center justify-between">
                <label htmlFor="url" className="font-semibold text-xl">
                  Enter password :{" "}
                </label>
                <input
                  type="password"
                  name=""
                  id="url"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-full py-2 px-4 w-96 outline-none border-none focus:outline-green-600"
                />
              </div>
              <input
                type="submit"
                className="bg-green-600 px-6 py-2 w-28 rounded-full"
                onClick={save}
                value={"save"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
