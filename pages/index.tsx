import Head from "next/head";
import Navbar from "../components/Navbar/DesktopNav";

import MobileNav from "../components/Navbar/MobileNav";
import Hero from "../components/LandingPage/Hero";
import Why from "../components/LandingPage/Why";
import ContactUs from "../components/LandingPage/ContactUs";
import Footer from "../components/LandingPage/Footer";
import Welcome from "../components/LandingPage/Welcome";

import Pricing from "../components/LandingPage/Pricing";
import Introduction from "../components/LandingPage/introduction";
import Explore from "../components/LandingPage/explore";
import Voices from "../components/LandingPage/voices";
export default function Home() {
  return (
    <>
      <Head>
        <title>ACIED</title>
        <meta
          name="description"
          content="Amplifying Women’s Voice’s in Migration Decisions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/use-logo.png" />
      </Head>

      <div className="w-full flex flex-col bg-white  min-h-screen overflow-x-hidden">
        <Navbar />
        <MobileNav />
        <Hero />
        <Introduction />
        <Explore />
      <Voices />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
