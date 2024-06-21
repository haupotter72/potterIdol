import React from "react";
import img1 from "@/app/asset/img/logo.png";
import Image from "next/image";

import { Search, ShoppingBag } from "@mui/icons-material";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className="lg:px-[200px] tablet:px-[100px]  ">
      <header
        style={{
          background:
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(217,177,209,1) 21%, rgba(213,178,211,1) 28%, rgba(205,179,214,1) 37%, rgba(196,180,217,1) 47%, rgba(223,176,208,1) 63%, rgba(148,187,233,1) 94%)",
        }}
        className=" lg:text-black text-center md:text-rose-700 justify-center items-center p-4 flex space-x-2"
      >
        <Image className="lg:mr-[5%] md:ml-5" alt="" src={img1} height={40} width={40} />
        <a className="text-2xl cursor-pointer  font-bold">SkillFy </a>
        <a className="text-xl cursor-pointer font-mono ">
          Home <ArrowDropDownIcon />
        </a>
        <a className="text-xl cursor-pointer   font-mono">
          Pages <ArrowDropDownIcon />
        </a>
        <a className="text-xl cursor-pointer  font-mono">
          Courses <ArrowDropDownIcon />
        </a>
        <a className="text-xl cursor-pointer  font-mono">
          Features <ArrowDropDownIcon />
        </a>
        <a className="text-xl cursor-pointer   font-mono">
          Blog <ArrowDropDownIcon />
        </a>
        <a className="text-xl cursor-pointer   font-mono">
          Shop <ArrowDropDownIcon />
        </a>
        <div className="pl-10 space-x-4">
          <ShoppingBag />
          <Search />
          <Button variant="contained">Login Here!</Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
