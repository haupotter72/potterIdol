import React from "react";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import img1 from "@/app/asset/img/course1.jpg";
import img2 from "@/app/asset/img/course2.jpg";
import img3 from "@/app/asset/img/course3.jpg";
import img4 from "@/app/asset/img/course4.jpg";
import img5 from "@/app/asset/img/course5.jpg";
import img6 from "@/app/asset/img/course6.jpg";
import Image from "next/image";
import img7 from "@/app/asset/img/face.png";
import StarIcon from "@mui/icons-material/Star";

import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

import { Face } from "@mui/icons-material";

const Course = () => {
  return (
    <div className="mt-10 px-[200px]">
      <div className=" flex  justify-between">
        <p className="text-2xl font-semibold hover:text-red-500 ">
          {" "}
          GET CHOICE OF YOUR COURSE
        </p>
        <div>
          <a className="text-xl cursor-pointer font-mono mr-2">
            DESIGN <ArrowDropDownIcon />
          </a>
          <Button className="bg-red-600 p-2" variant="contained">
            View All
          </Button>
        </div>
      </div>

      <div className=" grid grid-rows-2 grid-cols-3 gap-x-4 gap-y-52 pb-48 pt-10 shadow-xl shadow-slate-500/50">
        <div className="pl-4 pt-2 h-60 w-80  shadow-xl shadow-blue-500/50  shadow-xl shadow-blue-500/50">
          <Image src={img1} alt="" className="h-60 w-72 rounded-lg shadow-xl" />

          <div className="flex pt-4 space-x-1 font-semibold">
            <div className="flex space-x-1 hover:text-green-700">
              <StarIcon /> <span>4,5(120)</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <SmartDisplayIcon /> <span>28,500</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <Face /> <span>49 lesion</span>
            </div>
          </div>
          <h2 className=" text-xl font-semibold pt-2 ">
            Everything You Need to Know About Business
          </h2>

          <div className="flex  pt-4">
            <div className=" flex space-x-2 items-center    ">
              <Image
                className=" h-12 w-10  rounded-full mr-2"
                src={img7}
                alt=""
              />
              <p className="text-slate-700 pr-4 font-semibold   ">
                {" "}
                Harry Potter
              </p>
              <span className="line-through"> 5900 </span>
              <span className="font-bold text-orange-600 text-xl"> $49.65</span>
            </div>
          </div>
        </div>
        <div className="pl-4 pt-2 h-60 w-80  shadow-xl shadow-blue-500/50  shadow-xl shadow-blue-500/50">
          <Image src={img2} alt="" className="h-60 w-72 rounded-lg shadow-xl" />

          <div className="flex pt-4 space-x-1 font-semibold">
            <div className="flex space-x-1 hover:text-green-700">
              <StarIcon /> <span>4,5(120)</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <SmartDisplayIcon /> <span>28,500</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <Face /> <span>49 lesion</span>
            </div>
          </div>
          <h2 className=" text-xl font-semibold pt-2 ">
            Everything You Need to Know About Business
          </h2>

          <div className="flex  pt-4">
            <div className=" flex space-x-2 items-center    ">
              <Image
                className=" h-12 w-10  rounded-full mr-2"
                src={img7}
                alt=""
              />
              <p className="text-slate-700 pr-4 font-semibold   ">
                {" "}
                Harry Potter
              </p>
              <span className="line-through"> 5900 </span>
              <span className="font-bold text-orange-600 text-xl"> $49.65</span>
            </div>
          </div>
        </div>

        <div className="pl-4 pt-2 h-60 w-80  shadow-xl shadow-blue-500/50  shadow-xl shadow-blue-500/50">
          <Image src={img3} alt="" className="h-60 w-72 rounded-lg shadow-xl" />

          <div className="flex pt-4 space-x-1 font-semibold">
            <div className="flex space-x-1 hover:text-green-700">
              <StarIcon /> <span>4,5(120)</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <SmartDisplayIcon /> <span>28,500</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <Face /> <span>49 lesion</span>
            </div>
          </div>
          <h2 className=" text-xl font-semibold pt-2 ">
            Everything You Need to Know About Business
          </h2>

          <div className="flex  pt-4">
            <div className=" flex space-x-2 items-center    ">
              <Image
                className=" h-12 w-10  rounded-full mr-2"
                src={img7}
                alt=""
              />
              <p className="text-slate-700 pr-4 font-semibold   ">
                {" "}
                Harry Potter
              </p>
              <span className="line-through"> 5900 </span>
              <span className="font-bold text-orange-600 text-xl"> $49.65</span>
            </div>
          </div>
        </div>

        <div className="pl-4 pt-2 h-60 w-80  shadow-xl shadow-blue-500/50  shadow-xl shadow-blue-500/50">
          <Image src={img4} alt="" className="h-60 w-72 rounded-lg shadow-xl" />

          <div className="flex pt-4 space-x-1 font-semibold">
            <div className="flex space-x-1 hover:text-green-700">
              <StarIcon /> <span>4,5(120)</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <SmartDisplayIcon /> <span>28,500</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <Face /> <span>49 lesion</span>
            </div>
          </div>
          <h2 className=" text-xl font-semibold pt-2 ">
            Everything You Need to Know About Business
          </h2>

          <div className="flex  pt-4">
            <div className=" flex space-x-2 items-center    ">
              <Image
                className=" h-12 w-10  rounded-full mr-2"
                src={img7}
                alt=""
              />
              <p className="text-slate-700 pr-4 font-semibold   ">
                {" "}
                Harry Potter
              </p>
              <span className="line-through"> 5900 </span>
              <span className="font-bold text-orange-600 text-xl"> $49.65</span>
            </div>
          </div>
        </div>
        <div className="pl-4 pt-2 h-60 w-80  shadow-xl shadow-blue-500/50">
          <Image src={img5} alt="" className="h-60 w-72 rounded-lg shadow-xl" />

          <div className="flex pt-4 space-x-1 font-semibold">
            <div className="flex space-x-1 hover:text-green-700">
              <StarIcon /> <span>4,5(120)</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <SmartDisplayIcon /> <span>28,500</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <Face /> <span>49 lesion</span>
            </div>
          </div>
          <h2 className=" text-xl font-semibold pt-2 ">
            Everything You Need to Know About Business
          </h2>

          <div className="flex  pt-4">
            <div className=" flex space-x-2 items-center    ">
              <Image
                className=" h-12 w-10  rounded-full mr-2"
                src={img7}
                alt=""
              />
              <p className="text-slate-700 pr-4 font-semibold   ">
                {" "}
                Harry Potter
              </p>
              <span className="line-through"> 5900 </span>
              <span className="font-bold text-orange-600 text-xl"> $49.65</span>
            </div>
          </div>
        </div>

        <div className="pl-4 pt-2 h-60 w-80  shadow-xl shadow-blue-500/50">
          <Image src={img6} alt="" className="h-60 w-72 rounded-lg shadow-xl" />

          <div className="flex pt-4 space-x-1 font-semibold">
            <div className="flex space-x-1 hover:text-green-700">
              <StarIcon /> <span>4,5(120)</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <SmartDisplayIcon /> <span>28,500</span>
            </div>
            <div className="flex space-x-1 hover:text-green-700">
              <Face /> <span>49 lesion</span>
            </div>
          </div>
          <h2 className=" text-xl font-semibold pt-2 ">
            Everything You Need to Know About Business
          </h2>

          <div className="flex  pt-4">
            <div className=" flex space-x-2 items-center    ">
              <Image
                className=" h-12 w-10  rounded-full mr-2"
                src={img7}
                alt=""
              />
              <p className="text-slate-700 pr-4 font-semibold   ">
                {" "}
                Harry Potter
              </p>
              <span className="line-through"> 5900 </span>
              <span className="font-bold text-orange-600 text-xl"> $49.65</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
