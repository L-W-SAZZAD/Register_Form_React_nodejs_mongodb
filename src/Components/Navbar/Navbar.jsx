import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { GiTireIronCross } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";

export default function Navbar() {
  // toggle state menage
  const [toggle, setToggle] = useState(null);
  // toggle state menage
  return (
    <div className=" z-50">
      <div className=" lg:w-[1240px] lg:mx-auto w-full lg:px-0 md:px-2 sm:px-3 px-3 py-2 ">
        <div className="navbar flex justify-between items-center cursor-pointer">
          {/* logo */}
          <div className="logo">
            <NavLink>
              <h2></h2>
            </NavLink>
          </div>
          {/* logo */}
          {/* nav_items */}
          <ul
            className={`lg:flex md:flex  lg:static md:static sm:absolute  absolute top-0 ${
              toggle && "left-0"
            } ${
              !toggle && "left-[-5000px]"
            } font-semibold text-black tracking-wide lg:w-fit md:w-fit sm:w-[80%] w-[80%] lg:h-fit md:h-fit sm:h-screen h-screen lg:duration-0 md:duration-0 sm:duration-500 duration-500 lg:bg-transparent md:bg-transparent sm:bg-[#a3a19f] bg-[#a3a19f] z-50 `}
          >
            <li className="text-center lg:pt-0 md:pt-0  sm:pt-[40%] pt-[40%] lg:mb-0 md:mb-0 sm:mb-3 mb-3 lg:pr-3 md:pr-3 hover:text-[#FF6700] duration-300 ">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="text-center lg:mb-0 md:mb-0 sm:mb-3 mb-3 lg:pr-3 md:pr-3 hover:text-[#FF6700] duration-300">
              <NavLink to="/product" className="">
                Product
              </NavLink>
            </li>
            {/* cross icon */}
            <div
              onClick={() => setToggle(false)}
              className="lg:hidden md:hidden sm:absolute  absolute top-5 right-5 shadow-md p-3 text-2xl rounded-md hover:bg-[#FF6700] duration-300 cursor-pointer"
            >
              <GiTireIronCross />
            </div>
            {/* cross icon */}
          </ul>
          {/* nav_items */}
          {/* mobile icon */}
          <div
            onClick={() => setToggle(true)}
            className=" lg:hidden md:hidden sm:static static"
          >
            <GrMenu className=" font-semibold text-3xl mr-2 cursor-pointer" />
          </div>
          {/* mobile icon */}
        </div>
      </div>
    </div>
  );
}
