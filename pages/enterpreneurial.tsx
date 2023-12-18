import Head from "next/head";
import React from "react";
import EnterHero from "../components/enterpreneurial/EnterHero";
import Navbar from "../components/Navbar/DesktopNav";
import MobileNav from "../components/Navbar/MobileNav";
import EnterApproach from "../components/enterpreneurial/EnterApproach";
import Footer from "../components/LandingPage/Footer";
import Slideboard from "../components/about/Slideboard";
import Core from "../components/enterpreneurial/Core";
import Gallery from "../components/socio/Gallery";
import CoreB from "../components/enterpreneurial/CoreB";
import boyA from "../assets/png/boy-one.png"
import boyB from "../assets/png/boy-two.png"
import boyC from "../assets/png/boy-three.jpg"

const Enter = () => {
  const images = [boyA, boyB, boyC];
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Entrepreneurial</title>
      </Head>
      <Navbar />
      <MobileNav />
          <EnterHero />
          <EnterApproach />
          <Core />
          <CoreB />
          <Gallery images={images} />
          <Slideboard />
          <Footer />
    </div>
  );
};

export default Enter;
