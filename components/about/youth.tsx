import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import trafic from "../../assets/png/trafic.png"
import Image from 'next/image'
const Youth = () => {
  return (
    <div className="w-full lg:my-[120px] my-12">
      <ContainerLayout>
        <div className="w-full flex lg:flex-row flex-col  ">
          <div className="w-full lg:w-9/12 bg-primary flex justify-center items-center  ">
            <div className="w-full xl:max-w-[650px] py-12 lg:py-0 px-4 lg:px-0">
              <h1 className="text-white lg:text-[48px] xl:text-[56px] font-bold">
                NIGERIAN YOUTHS SAY NO TO IRREGULAR MIGRATION
              </h1>
                          <button className="w-full max-w-[147px] flex items-center justify-center text-white bg-[#FE5006] text-base font-semibold mt-12 lg:mt-8 h-[50px] ">
                              Contact Us
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/12 h-full">
            <Image src={trafic} alt="trafic" className='w-full h-full  object-fill ' />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Youth
