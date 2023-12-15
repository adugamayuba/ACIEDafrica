import React, { useState, useEffect } from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";

import Link from "next/link";
const images = ["spec-one", "spec-two", "spec-three"];

const Slideboard = () => {
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
      <div className={`w-full  py-24 flow-hide ${images[currentImageIndex]}`}>
        <ContainerLayout>
          <div className="w-full flex items-center justify-center space-y-12 lg:space-y-[60px]  flex-col">
            <h1 className="text-white  font-bold noto  lg:text-[48px] xl:text-[56px] text-[28px] max-w-[1200px] text-center mx-auto">
              African Centre for Inclusive Entrepreneurship Resilience and
              Social Innovation
            </h1>
            <div className="mt-12 w-fit">
              <Link
                href="/safe-migration"
                // target="_blank"
                // rel="noopener noreferrer"
                className="w-auto  px-8 py-4 bg-orange hover:bg-white text-white hover:text-customBlack flex items-center justify-center  rounded-[4px]"
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
};

export default Slideboard;
