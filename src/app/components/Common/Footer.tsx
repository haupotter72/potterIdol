import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div  
    style={{
          background:
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(217,177,209,1) 21%, rgba(213,178,211,1) 28%, rgba(205,179,214,1) 37%, rgba(196,180,217,1) 47%, rgba(223,176,208,1) 63%, rgba(148,187,233,1) 94%)",
        }}
    className="w-full h-96  mt-10 ">
      <div className="px-[200px]">
        <div className="  grid gap-x-32 gap-y-4 grid-cols-4  ">
          <div className="mt-10 text-black    ">
            <p className=" mb-4 text-2xl hover:text-red-500 hover:font-bold cursor-pointer transition delay-150 duration-300 ease-in-out">Company </p>
            <div className="text-black-400 space-y-2  ">
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
            </div>
          </div>
            <div className="mt-10 text-black    ">
            <p className=" mb-4 text-2xl hover:text-red-500 hover:font-bold cursor-pointer hover:skew-y-3 ">Company </p>
            <div className="text-black-400 space-y-2  ">
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
            </div>
          </div>
            <div className="mt-10 text-black    ">
            <p className=" mb-4 text-2xl hover:text-red-500 hover:font-bold cursor-pointer hover:skew-y-3 ">Company </p>
            <div className="text-black-400 space-y-2  ">
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
            </div>
          </div>
            <div className="mt-10 text-black    ">
            <p className=" mb-4 text-2xl hover:text-red-500 hover:font-bold cursor-pointer hover:skew-y-3 ">Company </p>
            <div className="text-black-400 space-y-2  ">
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
              <h2>About</h2>
            </div>
          </div>

      
        </div>

        <div className="border-t-2   border-slate-800 mt-10 flex justify-between ">
          <h2 className="text-slate-800 mt-4 text-sm uppercase">
            {" "}
            @2023-2024 Potter travel service always accompanies and stands by your side!
          </h2>
          <div className="space-x-20  mt-4 md:space-x-4 ">
            <YouTubeIcon className="text-slate-800 lg:text-3xl  " />
            <FacebookIcon className="text-slate-800 lg:text-3xl md:text-sm" />
            <InstagramIcon className="text-slate-800 lg:text-3xl md:text-sm" />
            <PlayCircleIcon className="text-slate-800 lg:text-3xl md:text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
