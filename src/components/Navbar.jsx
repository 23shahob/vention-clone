import React from "react";
import Logo from "../../public/logo.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";

const Navbar = () => {
  return (
    <div className="flex h-[60px] items-center border-b border-b-gray-300 px-[26px]">
      <div className="flex h-full w-[33%] items-center border-r border-b-gray-300">
        <a href="#">
          <img src={Logo} alt="Site Logo" />
        </a>
      </div>
      <div className="flex h-full w-[67%] items-center justify-around">
        <div className="flex h-full items-center hover:text-[#52002D] hover:last:rotate-180">
          <p>What we do</p>
          <KeyboardArrowDownIcon className="dropdown hover:rotate-180" />
        </div>
        <div className="">
          <p className="text cursor-pointer hover:text-[#52002D]">Portfolio</p>
        </div>
        <div className="">
          <p className="text cursor-pointer hover:text-[#52002D]">Insights</p>
        </div>
        <div className="flex h-full items-center hover:text-[#52002D]">
          <p>About us</p> <KeyboardArrowDownIcon className="dropdown hover:rotate-180" />
        </div>
        <div className="flex h-full cursor-pointer items-center bg-orange-600 px-5 transition duration-300 hover:bg-[#52002D] hover:text-white">
          <p>Contact us</p>
        </div>
        <div className="">
          <LanguageIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
