import React, { useState } from "react";
import { BiSolidUserPin } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Logout } from "../store/slices/userInfo.slice";
import { Navigate } from "react-router-dom";

const Header = () => {
  const activeStyle = "text-yellow-500";
  const [isShowOptions, setIsShowOptions] = useState(false);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(Logout());
    <Navigate to={"/login"} />;
  };

  const showOptions = () => setIsShowOptions(!isShowOptions);

  return (
    <div className="px-4 py-2 text-sm font-medium font-['Pacifico'] flex relative shadow-md">
      <div>
        <img src="./icons/notes.png" alt="" className="w-10" />
      </div>
      <nav className="w-full flex items-center justify-end">
        <ul className="flex justify-end items-center gap-4">
          <li className="hover:text-yellow-500 cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Notas
            </NavLink>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <NavLink
              to="/archived"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Archivados
            </NavLink>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <BiSolidUserPin className="text-xl" onClick={showOptions} />
          </li>
        </ul>
      </nav>
      <ul
        className={`${
          isShowOptions ? "opacity-100 top-[50px]" : "opacity-0 top-[35px]"
        } absolute rounded-b-md right-0 bg-white shadow-md w-[75px] flex flex-col items-center gap-2 py-2 transition-all duration-500`}
      >
        <li>
          <BsMoonStarsFill />
        </li>
        <li onClick={() => logOut()} className="cursor-pointer">
          Salir
        </li>
      </ul>
    </div>
  );
};

export default Header;
