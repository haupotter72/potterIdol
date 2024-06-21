"use client";
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";

import Button from "@mui/material/Button";
import Image from "next/image";
import img1 from "@/app/asset/img/slider1.jpg";
import img2 from "@/app/asset/img/slider2.jpg";
import img3 from "@/app/asset/img/slider3.jpg";
import img4 from "@/app/asset/img/slider4.jpg";
import img5 from "@/app/asset/img/slider5.jpg";
import img6 from "@/app/asset/img/slider6.jpg";
import img7 from "@/app/asset/img/slider7.jpg";
import img8 from "@/app/asset/img/slider8.jpg";
import img9 from "@/app/asset/img/slider9.jpg";

import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "@/app/asset/css/swiper1.module.css"
const Swiperjs = () => {


  
  return (
    <div>
     
      <div className="w-full pt-10 mt-10 h-[60cap] bg-sky-200">
        <div className="px-[200px]">
          <div className=" flex  justify-between">
            <p className="text-2xl font-semibold hover:text-red-500 ">
              {" "}
              THE WORLD'S LARGEST SELECTION OF COURSES hehe
            </p>
            <div>
              <a className="text-xl cursor-pointer font-mono mr-2">
                DESIGN <ArrowDropDownCircleOutlined />
              </a>
              <Button className="bg-red-600 p-2" variant="contained">
                View All
              </Button>
            </div>
          </div>

          <div className=" mt-10">
            <Swiper
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              <SwiperSlide><Image className={styles["image"]} src={img1} alt="" /><h2 className={styles['title']}> By Tho Potter</h2></SwiperSlide>
              <SwiperSlide><Image className={styles["image"]} src={img2} alt="" /><h2 className={styles['title']}> By Tho Potter</h2></SwiperSlide>
              <SwiperSlide><Image className={styles["image"]} src={img3} alt="" /><h2 className={styles['title']}> By Tho Potter</h2></SwiperSlide>
              <SwiperSlide><Image className={styles["image"]} src={img4} alt="" /><h2 className={styles['title']}> By Tho Potter</h2></SwiperSlide>
              <SwiperSlide><Image className={styles["image"]} src={img5} alt="" /><h2 className={styles['title']}> By Tho Potter</h2></SwiperSlide>
              <SwiperSlide><Image className={styles["image"]} src={img6} alt="" /><h2 className={styles['title']}> By Tho Potter</h2></SwiperSlide>
              <SwiperSlide><Image className={styles["image"]} src={img7} alt="" /><h2 className={styles['title']}> By Tho Potter</h2></SwiperSlide>
              <SwiperSlide><Image className={styles["image"]} src={img8} alt="" /><h2 className={styles['title']}> By Tho Potter</h2></SwiperSlide>
              <SwiperSlide><Image className={styles["image"]} src={img9} alt="" /><h2 className={styles['title']}> By Tho Potter</h2></SwiperSlide>
          
         
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};






export default Swiperjs;
