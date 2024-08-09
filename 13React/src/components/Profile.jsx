import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  return <div className="">Welcome {user}</div>;
}

export default Profile;
