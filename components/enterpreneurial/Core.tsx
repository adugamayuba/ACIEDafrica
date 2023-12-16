import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import { entrepreneurialSkillsOne } from '../../utils/test-data'
import entpic from "../../assets/png/ent-pic.png";
import Image from 'next/image';

const Core = () => {
  return (
    <div className="w-full flex flex-col bg-white py-12 lg:py-[120px]">
      <ContainerLayout>
        <div className="w-full flex flex-col-reverse space-y-8 lg:space-y-0 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="font-bold text-2xl lg:text-[36px] lg:leading-[50px] mt-8 lg:mt-0">
              The ACIEDafrica’s core mandates on Entrepreneurship Skills
              Development in Technical Vocational Education and Training (TVET)
            </h1>
            <p className="text-base lg:text-lg mt-6">
              Mainstream inclusion principles and practice in entrepreneurship
              education in Technical and Vocational Education and Training
              (TVET) Scheme of the Centre; 
                      </p>
                      <div className="flex flex-col space-y-1">
                          {
                              entrepreneurialSkillsOne.map((item, index) => (
                                  <p className='text-base lg:text-lg text-black' key={index}>
                                      <span className='ml-2'>
                                          {index + 1}.
                                      </span>
                                      {item}
                                  </p>
                              ))
                          }
                      </div>
          </div>
                  <div className="w-full lg:w-5/12 ">
                      <Image src={entpic} alt='ent' />
                  </div>
                  
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Core
