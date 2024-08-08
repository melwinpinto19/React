import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="h-16 w-full bg-gray-200 flex justify-between items-center px-16">
        <div className="font-bold text-2xl">Logo</div>
        <ul className="flex gap-8 font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-red-300" : "text-black"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-red-300" : "text-black"}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-red-300" : "text-black"}`
              }
            >
              contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/:userid"
              className={({ isActive }) =>
                `${isActive ? "text-red-300" : "text-black"}`
              }
            >
              Github
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
