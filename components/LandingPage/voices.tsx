import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import picA from "../../assets/png/pic-one.png";
import picB from "../../assets/png/pic-two.png";
import picC from "../../assets/png/pic-three.png";
import picD from "../../assets/png/pic-four.png";
import Image from 'next/image';
const Voices = () => {
  return (
    <div className="w-full py-12 lg:py-[160px] bg-white">
      <ContainerLayout>
        <div className="w-full flex flex-col">
                  {/* UPPER SIDE */}
                  <div className="flex flex-col">
                      
          <div className="w-full flex lg:flex-row lg:items-center lg:justify-between flex-col">
            <div className="flex flex-col w-full max-w-[624px]">
              <h1 className="text-[28px] font-[300] noto lg:text-[48px]">
                Voices that Matter:
              </h1>
              <h1 className="text-[28px] font-[700] noto lg:text-[48px]">
                Empowering Women in Migration Decision-Making
              </h1>
            </div>
            <div className="flex flex-col w-full max-w-[624px]">
              <p className="text-lg noto text-black mt-6 lg:mt-0">
                Discover the inspiring stories of women who have played a
                crucial role in migration decisions. Through interviews, case
                studies, and testimonials, ACIEDafrica showcases the strength
                and resilience of women who have shaped their migration
                journeys.
              </p>
            </div>
                  </div>
          </div>
                  {/* LOWER SIDE */}
                  <div className="mt-20 flex flex-col lg:flex-row lg:space-x-4 w-full">
                      <div className="w-full lg:w-5/6">
                          <Image  src={picA} alt="he"  className='object-cover'/>
                      </div>
                      <div className="w-full flex flex-row flex-wrap lg:flex-col gap-5 lg:w-1/6 lg:space-y-4 mt-6 lg:mt-0">
                          <span>
                              <Image src={picB} alt="  w-full" />
                          </span>
                          <span>
                              <Image src={picC} alt="w-full object-cover" />
                          </span>
                          <span>
                              <Image src={picD} alt="jdfjd" />
                          </span>
                      </div>
                  </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Voices
