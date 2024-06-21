"use client";
import React from "react";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Image from "next/image";
import img1 from "@/app/asset/img/info.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

const Info = () => {
  return (
    <div>
      <div className="mt-10 w-full h-screen ">
        <div className="justify-center text-center mb-5">
          <p className="text-3xl font-semibold mt-4">
            {" "}
            Every one deserves the chance to learn with Potter skillfy
          </p>
          <h4 className="text-xl font-mono mt-4 ">
            {" "}
            Join now ro receive personalised recommendations from the full harry
            potter
          </h4>
          <Button className="bg-gradient-to-r from-green-400 text-black font-bold to-blue-500 hover:from-pink-500 hover:to-yellow-500  mt-5" variant="contained">
            Start learning now
          </Button>
        </div>
        <div className="bg-gray-300 w-full h-[90%]">
          <div className=" pt-10 justify-between flex px-[200px] mb-14">
            <p className="text-2xl font-bold">
              {" "}
              CAN YOU TELL ME WHAT IS THE HARRY POTTER MOVIES !
            </p>
            <div className="space-x-4 ">
              <KeyboardBackspaceIcon className="bg-white text-4xl p-2 rounded-lg hover:bg-amber-500 " />
              <ArrowRightAltIcon className="bg-white text-4xl p-2 rounded-lg hover:bg-amber-500 " />
            </div>
          </div>

          <div className="flex  pt-10 px-[200px] justify-around">
            <div className="bg-white h-60 w-[32%] rounded-md">
              <div className=" flex p-4">
                <Image
                  className=" h-12 w-10  rounded-full mr-2"
                  src={img1}
                  alt=""
                />
                <div className="ml-2">
                  <p className="font-bold "> Potter Cr7</p>
                  <p className="font-mono text-xl">CEO FOOtBAll World</p>
                </div>

                <TwitterIcon className="bg-cyan-500 text-black text-5xl p-2 rounded-lg ml-4" />
              </div>

              <p className="p-4 font-medium">
                {" "}
                Skiffy is a lide saver.Skiffy is a lide saverSkiffy is a lide
                saverSkiffy is a lide saver I don't know what did i say ! so
                crazy and by writter{" "}
                <span className="text-sky-600 font-semibold"> @Potter</span>
              </p>
            </div>
            <div className="bg-white h-60 w-[32%] rounded-md">
              <div className=" flex p-4">
                <Image
                  className=" h-12 w-10  rounded-full mr-2"
                  src={img1}
                  alt=""
                />
                <div className="ml-2">
                  <p className="font-bold "> Potter Cr7</p>
                  <p className="font-mono text-xl">CEO FOOtBAll World</p>
                </div>

                <TwitterIcon className="bg-cyan-500 text-black text-5xl p-2 rounded-lg ml-4" />
              </div>

              <p className="p-4 font-medium">
                {" "}
                Skiffy is a lide saver.Skiffy is a lide saverSkiffy is a lide
                saverSkiffy is a lide saver I don't know what did i say ! so
                crazy and by writter{" "}
                <span className="text-sky-600 font-semibold"> @Potter</span>
              </p>
            </div>
            <div className="bg-white h-60 w-[32%] rounded-md">
              <div className=" flex p-4">
                <Image
                  className=" h-12 w-10  rounded-full mr-2"
                  src={img1}
                  alt=""
                />
                <div className="ml-2">
                  <p className="font-bold "> Potter Cr7</p>
                  <p className="font-mono text-xl">CEO FOOtBAll World</p>
                </div>

                <TwitterIcon className="bg-cyan-500 text-black text-5xl p-2 rounded-lg ml-4" />
              </div>

              <p className="p-4 font-medium">
                {" "}
                Skiffy is a lide saver.Skiffy is a lide saverSkiffy is a lide
                saverSkiffy is a lide saver I don't know what did i say ! so
                crazy and by writter{" "}
                <span className="text-sky-600 font-semibold"> @Potter</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-600 h-[13cap] mx-[200px] rounded-lg   ">
        <div className="p-6 ml-[10%] space-x-8 justify-center pt-12 flex  ">
          <h2 className="text-white text-2xl font-semibold mr-16">
            {" "}
            App is avaiilable for free !
          </h2>
          <Button className="bg-slate-500  p-4 " variant="contained">
            <AppleIcon className="mr-2" />
            Iphone Lor
          </Button>
          <Button className="bg-red-600 p-4  " variant="contained">
            <AndroidIcon className="mr-2" /> Android
          </Button>
        </div>
      </div>

      <div className=" mx-[200px] mt-20">
        <div className=" justify-around flex">
          <div className="bg-slate-400 w-[40%] h-56 p-4 pt-6 flex justify-between">
            <Image src={img1} alt="" className="h-16 w-12  rounded-full mr-2" />
            <div className="px-6">
              <h2 className=" font-bold text-xl">Become a Teacher</h2>
              <p className=" pt-2 font-medium pb-4">
                Teacher what you love Coursector gives tou the tools to create a
                course.
              </p>
              <Button className="bg-red-600 p-4  " variant="contained">
                Apply as teacher
              </Button>
            </div>
          </div>
          <div className="bg-slate-400 w-[40%] h-56 p-4 pt-6 flex justify-between">
            <Image src={img1} alt="" className="h-16 w-12  rounded-full mr-2" />
            <div className="px-6">
              <h2 className=" font-bold text-xl">Become a Teacher</h2>
              <p className=" pt-2 font-medium pb-4">
                Teacher what you love Coursector gives tou the tools to create a
                course.
              </p>
              <Button className="bg-red-600 p-4  " variant="contained">
                Apply as teacher
              </Button>
              <div>


</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
