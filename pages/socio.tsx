import React from 'react'
import Head from 'next/head'
import Footer from '../components/LandingPage/Footer';
import Navbar from '../components/Navbar/DesktopNav';
import MobileNav from '../components/Navbar/MobileNav';
import Slideboard from '../components/about/Slideboard';
import SocioHero from '../components/socio/socio-hero';
import Brief from '../components/socio/Brief';
import Gallery from '../components/socio/Gallery';
import one from "../assets/png/bepp-x.png";
import two from "../assets/png/uu.png";
import three from "../assets/png/banner.png";
const Socio = () => {
  const images = [one,two,three]
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Socioeconomic</title>
      </Head>
      <Navbar />
          <MobileNav />
          <SocioHero />
      <Brief />
      <Gallery images={images} />
      <Slideboard />

      <Footer />
    </div>
  );
}

export default Socio
