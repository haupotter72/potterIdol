"use client";
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";

import Button from "@mui/material/Button";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles


import styles from "@/app/asset/css/swiper.module.css"
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

// import img swip1
import img1 from "@/app/asset/img/swip1.jpg";
import img2 from "@/app/asset/img/swip2.jpg";
import img3 from "@/app/asset/img/swip3.jpg";
import img4 from "@/app/asset/img/swip4.jpg";
import img5 from "@/app/asset/img/swip5.jpg";
import img6 from "@/app/asset/img/swip6.jpg";

import img8 from "@/app/asset/img/swip8.png";
import img9 from "@/app/asset/img/swip9.jpg";

import img10 from "@/app/asset/img/swap1.jpg";
import img11 from "@/app/asset/img/swap2.jpg";
import img12 from "@/app/asset/img/swap3.jpg";
import img13 from "@/app/asset/img/swap4.jpg";
import img14 from "@/app/asset/img/swap5.jpg";
import img15 from "@/app/asset/img/swap6.jpg";
import img16 from "@/app/asset/img/swap7.jpg";
import img17 from "@/app/asset/img/swip9.jpg";



import Image from "next/image";

const SwiperjsTest = () => {


  return (
    <div>
    
      <div className="w-full pt-10 h-[60cap] bg-sky-200">
        <div className="px-[200px]">
          <div className=" flex  justify-between">
            <p className="text-2xl font-semibold hover:text-red-500 ">
              {" "}
              THE WORLD'S LARGEST SELECTION OF COURSES
            </p>
            <div className="mb-10">
              <a className="text-xl cursor-pointer font-mono mr-2">
                DESIGN <ArrowDropDownCircleOutlined />
              </a>
              <Button className="bg-red-600 p-2" variant="contained">
                View All
              </Button>
            </div>
          </div>

          <div className=" px-[200px]  flex justify-center">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className={styles["swiper"]}
            >
              <SwiperSlide   className={styles["swiper-slide"]}>
                <Image  className={styles["image"]}  src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image className={styles["image"]} src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image className={styles["image"]} src={img3} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image className={styles["image"]} src={img4} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image  className={styles["image"]} src={img5} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image className={styles["image"]} src={img6} alt="" />
              </SwiperSlide>

              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image className={styles["image"]} src={img8} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
              <Image className={styles["image"]} src={img9} alt="" />
              </SwiperSlide>
            </Swiper>


              <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className={styles["swiper"]}
            >
              <SwiperSlide   className={styles["swiper-slide"]}>
                <Image  className={styles["image"]}  src={img10} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image className={styles["image"]} src={img11} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image className={styles["image"]} src={img12} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image className={styles["image"]} src={img13} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image  className={styles["image"]} src={img14} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image className={styles["image"]} src={img15} alt="" />
              </SwiperSlide>

              <SwiperSlide  className={styles["swiper-slide"]}>
                <Image className={styles["image"]} src={img16} alt="" />
              </SwiperSlide>
              <SwiperSlide  className={styles["swiper-slide"]}>
              <Image className={styles["image"]} src={img17} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperjsTest;
