
import Footer from '../components/LandingPage/Footer';
import Navbar from '../components/Navbar/DesktopNav';
import MobileNav from '../components/Navbar/MobileNav';
import StandFor from '../components/about/StandFor';
import AboutHero from '../components/about/about-hero';
import Areas from '../components/about/areas';
import CoreValue from '../components/about/core-value';
import Mission from '../components/about/mission';
import Youth from '../components/about/youth';
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
      <Areas />
      <Youth />
      <Footer />
    </div>
  );
}

export default AboutUs
