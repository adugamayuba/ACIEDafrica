import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout';
import { BodyNormal, HeaderTwo } from '../HeaderText';
import ptee from "../../assets/png/ptee.png"
import Image from 'next/image';
const Water = () => {
    return (
      <div className="w-full py-12 lg:py-[120px] bg-[#97092F]">
        <ContainerLayout>
          <div className="w-full flex flex-col lg:flex-row lg:justify-between">
            <div className="w-full lg:w-5/12">
              <Image src={ptee} alt="ptee" />
            </div>
            <div className="w-full lg:w-6/12 flex flex-col justify-center ">
              <HeaderTwo text="Water, Sanitation and Hygiene (WASH) Education for Schools and Communities" className='mt-6 lg:mt-0' />
              <BodyNormal className='mt-6' text="ACIEDafrica is supporting effective Water, Sanitation and Hygiene (WASH) programming and education in schools and communities. Our strategy focuses on four major elements – i. child friendly innovative WASH facilities/infrastructure; ii. hygiene and sanitation best practices through training for school children and teachers; iii. outreach in communities to raise awareness on severity of “period poverty” as a public health, human rights and socio-economic issues; iv.  advocacy for better mensural health education and policies. " />
            </div>
          </div>
        </ContainerLayout>
      </div>
    );
}

export default Water
