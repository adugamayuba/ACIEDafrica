import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout';
import globe from "../../assets/png/half-globe.png";
import Image from 'next/image';
import {A,ArrowForward,B,C} from "../../assets/svg/index"
const Explore = () => {
    return (
      <div className="w-full bg-[#F7F7F7] py-12 lg:py-[160px]">
        <ContainerLayout>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {/* lefr side */}
            <div className="w-full ">
              <div className="w-full flex flex-col max-w-[585px]">
                <h1 className="text-customBlack font-bold noto lg:text-[48px] xl:text-[56px] text-[28px]">
                  Explore how Aciedafrica is amplifying women's voices in
                  Migration decisions.
                </h1>
                <p className="mt-6 text-lg text-customBlack ">
                  Join us in shaping a future where every woman's voice matters
                  and migration decisions are empowered and safe."
                </p>
              </div>
            </div>
            {/* lefr side */}
            <div className="w-full grid lg:grid-cols-2 gap-8 ">
              {/* start  */}
              <div className="w-full h-[256px] bg-primary p-6 flex flex-col justify-between">
                <p className="text-white noto">Aciedafrica in view</p>

                <span>
                  <A />
                </span>
              </div>
              {/* end  */}
              {/* start  */}
              <div className="w-full h-[256px] bg-primary p-6 flex flex-col justify-between">
                <p className="text-white noto">Migration Practices</p>

                <span>
                  <B />
                </span>
              </div>
              {/* end  */}
              {/* start  */}
              <div className="w-full h-[256px] bg-primary p-6 flex flex-col justify-between">
                <p className="text-white noto">
                  Empowering Women in Decision-Making
                </p>

                <span>
                  <C />
                </span>
              </div>
              {/* end  */}
              {/* start  */}
                        <div className="w-full h-[256px] bg-[#24A83A] p-6 flex flex-col justify-between relative overflow-x-hidden">
                            <div className="absolute left-0 right-0 flex justify-end bottom-[10px] z-1">
                    <Image src={globe} alt={''} className='opacity-20' />
                            </div>
                <p className="text-white noto">Learn More</p>

                <div className='border-[#f7f7f7] space-x-2 border flex items-center text-white text-lg font-medium w-fit p-3 '>
                                <span>
                                Contact us
                 </span>
                                <span>
                                
                                <ArrowForward />
                                </span>
                </div>
              </div>
              {/* end  */}
            </div>
          </div>
        </ContainerLayout>
      </div>
    );
}

export default Explore


