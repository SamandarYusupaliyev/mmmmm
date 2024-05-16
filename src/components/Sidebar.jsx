import React from "react";
import menuImg from "../assets/icon-menu.svg";
const Sidebar = () => {
  return (
    <div className=" lg:hidden flex">
      <div className="drawer drawer-start">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn bg-inherit border-none"
          >
            <img src={menuImg} alt="" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="flex flex-col gap-4 w-80 min-h-full bg-base-200 text-base-content p-6">
            <li>
              <button className="btn">X</button>
            </li>
            <li className="cursor-pointer">Collections</li>
            <li className="cursor-pointer">Men</li>
            <li className="cursor-pointer">Women</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
