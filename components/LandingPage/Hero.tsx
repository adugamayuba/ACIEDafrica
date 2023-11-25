import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'

import Link from 'next/link'
const Hero = () => {
  return (
    <div className="w-full fine-bg py-24 flow-hide ">
      <ContainerLayout>
        <div
          className=" flex flex-col items-start flow-hide"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h1 className="font-bold text-white text-[28px] sm:text-[28px] lg:text-[40px] 2xl:text-[64px] text-start lg:w-9/12 2xl:w-9/12 2xl:leading-[88px] block mt-8 2xl:mt-[100px] tracking-[-2%] nuto max-w-[654px] ">
            Amplifying Women’s Voice’s in Migration Decisions.
          </h1>
          <p className="xl:text-xl  text-white text-base font-light text-start mt-6 ">
            Learn about safe migration practices and protocols to protect
            yourself.
          </p>
          <div className="mt-12 ">
            <Link
              href="https://www.facebook.com/profile.php?id=61553613248930"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto  px-8 py-4 bg-white hover:bg-primary text-customBlack hover:text-white flex items-center justify-center "
            >
              Contact us
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Hero
