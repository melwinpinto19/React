import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div
      className="h-16 w-full flex items-center justify-between px-8"
      style={{ background: "#77E4C8" }}
    >
      <div className="font-bold text-2xl">PSX</div>
      <ul className="flex gap-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-blue-800" : "text-black"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/passwords"
            className={({ isActive }) =>
              `${isActive ? "text-blue-800" : "text-black"}`
            }
          >
            Passwords
          </NavLink>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
