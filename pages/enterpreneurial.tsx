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

const Enter = () => {
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
          <Gallery />
          <Slideboard />
          <Footer />
    </div>
  );
};

export default Enter;
