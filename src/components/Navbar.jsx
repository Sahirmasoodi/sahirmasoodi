import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to={"/sahirmasoodi"} className="w-14 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md hover:scale-95">
        <p className="blue-gradient_text">Home</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to={"/about"} className={({ isActive }) =>
            isActive ? "text-blue-500 hover:scale-95" : "text-black hover:scale-95"} >
          About
        </NavLink>
        <NavLink to={"/contact"} className={({ isActive }) =>
            isActive ? "text-blue-500 hover:scale-95" : "text-black hover:scale-95"} >
          Contact
        </NavLink>
        <NavLink to={"/projects"} className={({ isActive }) =>
            isActive ? "text-blue-500 hover:scale-95" : "text-black hover:scale-95"} >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
