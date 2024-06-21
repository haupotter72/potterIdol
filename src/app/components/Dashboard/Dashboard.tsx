"use client";
import React from "react";
import img1 from "@/app/asset/img/bg.jpg";
import img2 from "@/app/asset/img/img1.jpg";
import Image from "next/image";
import Button from "@mui/material/Button";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BungalowIcon from "@mui/icons-material/Bungalow";
import StarsIcon from "@mui/icons-material/Stars";

import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import img3 from "@/app/asset/img/img2.jpg";

const DashboardHero = () => {
  return (
    <div>
      <div className="px-[200px] pt-[10px] pb-[40px]  ">
        <div className="w-full bg-red-200 h-screen  flex justify-between py-10 ">
          <div className="w-[50%] pl-10">
            <h1 className="text-5xl text-gray-500 font-bold leading-snug">
              <span className="text-red-700">SKILLFY</span> IS THE ONE OF FOR
              ALL STUDENTS
            </h1>
            <p className="pt-10 pb-10 text-4xl font-light text-black">
              Get here study moterial for all classes entrance exame and
              compotitive axams and lastest education new .
            </p>

            <Button className="bg-gradient-to-r from-green-400 text-black font-bold to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-4" variant="contained">
              EnrollNow
            </Button>

            <div className=" flex pt-10 justify-between">
              <p className="text-2xl font-semibold text-cyan-700">
                {" "}
                Start Now !{" "}
              </p>
              <span className="bg-red-600 rounded-full p-2">FB</span>
              <span>FB</span>
              <span>FB</span>
              <span>FB</span>
              <span>FB</span>
            </div>
          </div>

          <div>
            <Image
              className="h-[100%] w-full pr-6 rounded-2xl"
              alt=""
              src={img2}
            />
          </div>

          <div></div>
        </div>

        <div className="pt-6">
          
          <div className="text-5xl font-extrabold flex justify-center items-center">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    THO POTTER IN YOUR AREA ^^
  </span>
</div>
          <div className="grid grid-cols-3 gap-3 pt-5">
            <div className="bg-slate-300 hover:bg-slate-700 hover:h-64 hover:animate-spin drop-shadow-md h-56 rounded-xl p-6">
              <LightbulbIcon
                height={30}
                className="bg-red-500 mb-4 p-2 rounded-xl  h-12 w-12"
              />

              <p className="text-2xl font-serif">Team the latest skills</p>
              <p className=" pt-2">
                Harry Potter is the best movie in my life. I love this so much !
              </p>
            </div>

            <div className="bg-slate-300 hover:bg-slate-700 hover:h-64 hover:animate-spin drop-shadow-md h-56 rounded-xl p-6">
              <BungalowIcon
                height={30}
                className="bg-blue-500 mb-4 p-2 rounded-xl  h-12 w-12"
              />

              <p className="text-2xl font-serif">Team the latest skills</p>
              <p className=" pt-2">
                Harry Potter is the best movie in my life. I love this so much !
              </p>
            </div>

            <div className="bg-slate-300 hover:bg-slate-700 hover:h-64 hover:animate-spin drop-shadow-md h-56 rounded-xl p-6">
              <StarsIcon
                height={30}
                className="bg-green-500 mb-4 p-2 rounded-xl  h-12 w-12"
              />

              <p className="text-2xl font-serif">Team the latest skills</p>
              <p className=" pt-2">
                Harry Potter is the best movie in my life. I love this so much !
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-10 h-[50cap] bg-sky-200">
        <div className="flex justify-center space-x-10 pt-6 ">
          <div>
            <p className="font-semibold text-2xl">
              {" "}
              LEARNER OUTCOMES <br /> ON SKILLIFY
            </p>
            <p className="text-xl mt-2">
              87% of people learning for professional development <br /> report
              career benefits like the gettting a promotion,
              <br /> a raise, or starting a new career !
            </p>

            <p className="pt-6">
              <CheckCircleIcon className="text-green-800 mr-4" /> Harry Potter
              is the best in my life !
            </p>
            <p className="pt-4 pb-6">
              <CheckCircleIcon className="text-green-800 mr-4" /> Harry Potter
              is the best in my life !
            </p>

            <Button className="bg-gradient-to-r from-green-400 text-black font-bold to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-4" variant="contained">
              Start learning now
            </Button>
          </div>

          <div>
            <Image
              className="rounded-xl"
              src={img3}
              alt=""
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
