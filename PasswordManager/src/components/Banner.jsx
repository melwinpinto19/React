import React from "react";

function Banner({ setBanner, msg, color = "black" }) {
  return (
    <div
      className={`absolute top-0 bg-${color} grid place-items-center w-full text-white h-10 font-mono`}
    >
      {msg}
      <div className="absolute right-4" onClick={() => setBanner("")}>
        X
      </div>
    </div>
  );
}

export default Banner;
