import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="h-4/5 w-full bg-red-400 grid place-items-center">
      <div className="bg-green-400 h-16 w-full grid place-items-center">User:{userid}</div>
    </div>
  );
}

export default User;
