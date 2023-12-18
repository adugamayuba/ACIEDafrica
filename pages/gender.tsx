import Head from "next/head";
import Navbar from "../components/Navbar/DesktopNav";
import MobileNav from "../components/Navbar/MobileNav";
import Footer from "../components/LandingPage/Footer";
import Slideboard from "../components/about/Slideboard";
import GenderHero from "../components/gender/GenderHero";
import StageTwo from "../components/gender/StageTwo";
import Stagethree from "../components/gender/Stagethree";
import GenderGallery from "../components/gender/GenderGallery";
import Banner from "../components/gender/Banner";
import Health from "../components/gender/Health";
import Education from "../components/gender/Education";
import ProgramStrategy from "../components/gender/ProgramStrategy";
import Water from "../components/gender/Water";

const Sustain = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Gender Studies</title>
      </Head>
      <Navbar />
      <MobileNav />
      <GenderHero />
      <StageTwo />
      <Stagethree />
      <GenderGallery />
      <Banner />
      <Health />
      <Education />
      <ProgramStrategy />
      <Water />
      <Slideboard />
      <Footer />
    </div>
  );
};

export default Sustain;
