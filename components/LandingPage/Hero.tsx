import React,{useState,useEffect} from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'

import Link from 'next/link'
const images = [
  "bg-one",
  "bg-two",
  "bg-three",
]
const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Effect to reset the index when reaching the last image
    useEffect(() => {
      if (currentImageIndex === images.length) {
        setCurrentImageIndex(0);
      }
    }, [currentImageIndex, images.length]);

    // Effect to change the background image at a 10-second interval
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);

      // Cleanup function to clear the interval on component unmount
      return () => clearInterval(intervalId);
    }, [images.length]);
  
  
  return (
    <div className={`w-full   py-24 flow-hide ${images[currentImageIndex]}`}>
      <ContainerLayout>
        <div
          className=" flex flex-col items-start flow-hide"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h1 className="font-bold text-white text-[28px] sm:text-[28px] lg:text-[40px] 2xl:text-[64px] text-start lg:w-9/12 2xl:w-9/12 2xl:leading-[88px] block mt-8 2xl:mt-[100px] tracking-[-2%] nuto max-w-[654px] ">
            African Centre for Inclusive Entrepreneurship Resilience and Social
            Innovation
          </h1>
          <p className="xl:text-xl  text-white text-base font-light text-start mt-6 ">
            learn more about who we are and what we do
          </p>
          <div className="mt-12 ">
            <Link
              href="/about"
              className="w-auto  px-8 py-4 bg-orange hover:bg-white text-white hover:text-customBlack flex items-center justify-center rounded-[4px]"
            >
              Learn more
            </Link>
          </div>
          <div className="flex mt-12 space-x-[10px]">
            <span
              className={`${
                currentImageIndex === 0
                  ? "bg-[#fe50061a] border-[0.5px] border-orange text-orange"
                  : "bg-transparent text-white border border-white"
              } w-[34px] h-[34px] rounded-full flex items-center justify-center  `}
            >
              1
            </span>
            <span
              className={`${
                currentImageIndex === 1
                  ? "bg-[#fe50061a] border-[0.5px] border-orange text-orange"
                  : "bg-transparent text-white border border-white"
              } w-[34px] h-[34px] rounded-full flex items-center justify-center  `}
            >
              2
            </span>
            <span
              className={`${
                currentImageIndex === 2
                  ? "bg-[#fe50061a] border-[0.5px] border-orange text-orange"
                  : "bg-transparent text-white  border-white border-[0.5px]  "
              } w-[34px] h-[34px] rounded-full flex items-center justify-center  `}
            >
              3
            </span>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Hero
