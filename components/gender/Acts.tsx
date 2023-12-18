import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import pepe from "../../assets/png/pepe.png";
import { HeaderTwo, BodyNormal } from '../HeaderText';
import { genderStudiesFour } from '../../utils/test-data';

const Acts = () => {
  return (
    <div className="w-full py-12 lg:py-[120px]">
      <ContainerLayout>
        <div className="w-full flex flex-col-reverse  lg:flex-row lg:justify-between lg:items-center">
          <div className="w-full lg:w-6/12 flex flex-col">
            <HeaderTwo text="Our activities include" color='text-black' className='mt-6 lg:mt-0 mb-4'/>
            <ul className="list-disc px-5">
              {genderStudiesFour?.map((item: any, index: number) => {
                return (
                  <li key={index} className="">
                    <BodyNormal color="text-black" text={item} />
                  </li>
                );
              })}
            </ul>
            <BodyNormal
              text="Our school-based activities are specifically focused on improving children’ enrolment and retention rates in schools through provision of clean water and good sanitation system, and offer training on how to maintain healthy environment. ACIEDafrica strongly promotes girl or woman-friendly sanitation facilities – toilets that are equipped with facilities for menstrual hygiene. We also provide special training to female students in public schools on menstrual hygiene management and support girls with free sanitary products to prevent them from infections. 
" 
              color='text-black'
            />
          </div>
          <div className="w-full lg:w-5/12">
            <Image
              src={pepe}
              alt="Pepe the Frog"
              height={pepe.height}
              width={pepe.width}
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Acts
