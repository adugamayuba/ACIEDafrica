import Head from 'next/head';
import React from 'react'
import SustainHero from '../components/sustain/sustain-hero';
import Navbar from '../components/Navbar/DesktopNav';
import MobileNav from '../components/Navbar/MobileNav';
import SustainApproach from '../components/sustain/sustain-approach';
import Footer from '../components/LandingPage/Footer';
import Slideboard from '../components/about/Slideboard';

const Sustain = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Sustain</title>
      </Head>
      <Navbar />
          <MobileNav />
          <SustainHero />
          <SustainApproach />
<Slideboard />
          <Footer />
    </div>
  );
}

export default Sustain
