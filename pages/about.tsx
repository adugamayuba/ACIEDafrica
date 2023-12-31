
import Footer from '../components/LandingPage/Footer';
import Navbar from '../components/Navbar/DesktopNav';
import MobileNav from '../components/Navbar/MobileNav';
import Slideboard from '../components/about/Slideboard';
import StandFor from '../components/about/StandFor';
import AboutHero from '../components/about/about-hero';
import Activities from '../components/about/activities';
import CoreValue from '../components/about/core-value';
import Head from 'next/head';

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col min-h-screen justify-between">
      <Head>
        <title>
          About Us
        </title>
      </Head>
      <Navbar />
      <MobileNav />
      <AboutHero />
      <CoreValue />
      <StandFor />
      <Activities />
    <Slideboard />
     
      <Footer />
    </div>
  );
}

export default AboutUs
