import React from 'react'
import Head from 'next/head'
import SaveHero from '../components/save/save-hero'
import Navbar from '../components/Navbar/DesktopNav'
import MobileNav from '../components/Navbar/MobileNav'
import Footer from '../components/LandingPage/Footer'
import Youth from '../components/about/youth'
import Objectives from '../components/save/objectives'
import Resources from '../components/save/resources'
const index = () => {
  return (
    <div className='w-full flex flex-col'>
          <Head>
              <title>Save migration</title>
          </Head>
          <Navbar />
          <MobileNav />
      <SaveHero />
      <Objectives />
      <Resources />
        <Youth />
          <Footer />
    </div>
  )
}

export default index
