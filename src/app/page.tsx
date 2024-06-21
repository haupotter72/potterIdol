import Image from "next/image";

import Header from "./components/Common/Header";
import DashboardHero from "./components/Dashboard/Dashboard";
import Footer from "./components/Common/Footer";
import Course from "./components/Dashboard/Course";
import Swiperjs from "./components/Dashboard/Swiperjs";
import Info from "./components/Dashboard/Info";
import SwiperjsTest from "./components/Dashboard/SwiperjsTest";
import Trailer from "./components/Dashboard/Trailer";

export default function Home() {
  return (
    <main>
      <Header />
      <DashboardHero />
   
      <Course />
      <Swiperjs />
      <SwiperjsTest/>
      <Info />
      {/* <Trailer/> */}
      <Footer />
    </main>
  );
}
