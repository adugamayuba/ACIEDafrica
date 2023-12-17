import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
const Banner = () => {
  return (
    <div className="w-full flat-four  ">
      <ContainerLayout>
        <div className="w-full flex items-center justify-center lg:h-[791px] py-12 lg:py-0">
          <h1 className="text-white font-bold text-center max-w-[829px] text-3xl lg:text-[48px] xl:text-[56px] lg:leading-[64px]">
            ACIEDafrica Social Innovation Programmes in Health and Education
            Sectors
          </h1>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Banner
