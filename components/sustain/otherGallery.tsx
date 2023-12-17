import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import flatA from "../../assets/png/flat-2.png";
import flatB from "../../assets/png/flat-3.png";
import flatC from "../../assets/png/flat-4.png";
import flatD from "../../assets/png/bep-f.png";
import rect from "../../assets/png/rect.png";

const OtherGallery = () => {
  return (
    <div className="w-full py-12 lg:py-[120px]">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          {/* firsr */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <span>
              <Image
                src={flatA}
                alt="rect"
                loading="lazy"
                className="w-full h-auto"
              />
            </span>
            <span>
              <Image
                src={flatB}
                alt="rect"
                loading="lazy"
                className="w-full h-auto"
              />
            </span>
            <span>
              <Image
                src={flatC}
                alt="rect"
                loading="lazy"
                className="w-full h-auto"
              />
            </span>
            <span>
              <Image
                src={flatD}
                alt="rect"
                loading="lazy"
                className="w-full h-auto"
              />
            </span>
          </div>
          {/* second */}
          <div className="w-full mt-6">
            <span>
              <Image
                src={rect}
                alt="rect"
                loading="lazy"
                className="w-full h-auto"
              />
            </span>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default OtherGallery
