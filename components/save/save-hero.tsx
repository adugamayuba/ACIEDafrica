import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image';
import one from "../../assets/png/aone.png";
import two from "../../assets/png/atwo.png";
import three from "../../assets/png/athree.png";
const SaveHero = () => {
  return (
    <div className="w-full bg-primary py-[60px] lg:py-[120px]">
      <ContainerLayout>
        <div className="w-full flex flex-col mt-12 lg:mt-0">
          <h1 className="text-white font-bold text-[28px] lg:text-[56px] 2xl:text-[64px] max-w-[1252px] text-center mx-auto mb-10">
            Safe Journeys: Promoting Awareness and Empowering Women for Safe
            Migration
          </h1>
        </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className='w-full'>
                      <Image src={one} alt='alt' />
                  </div>
                  <div className="flex flex-col space-y-6">
                      <Image src={two} alt='two'    />
                      <Image src={three} alt='three'    />
                  </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default SaveHero
