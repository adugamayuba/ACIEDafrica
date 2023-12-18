import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import bep from "../../assets/png/bep-d.png"
import { HeaderTwo, BodyNormal } from '../HeaderText'
import { genderStudiesTwo } from '../../utils/test-data'
const Health = () => {
  return (
    <div className="w-full py-12 lg:py-[120px] bg-[#f8f8f8]">
      <ContainerLayout>
        <div className="w-full flex lg:flex-row flex-col-reverse space-y-8 lg:space-y-0  lg:justify-between lg:items-center">
          <div className="w-full lg:w-6/12 flex flex-col">
            <HeaderTwo text="Health" color="text-black" className="mb-6 mt-6 lg:mt-0" />
            <p className="text-base lg:text-lg text-black mb-8 ">
              <span className="font-bold">
                Behavioral Health Equity Promotion –
              </span>
              ACIEDafrica’s effort is focused on advancing health equity,
              ensuring that everyone (including children, adolescents and older
              people) has a fair and just opportunity to be as healthy as
              possible. The rights to access high-quality and affordable health
              care services and support for all populations, including people
              living in the underserved communities, ethnic minority, persons
              with disabilities, persons otherwise adversely affected by
              persistent poverty and inequality as well as low income earners. 
            </p>

            <p className="text-base lg:text-lg text-black">
              We intend to achieve this through the following five (5) key
              strategies: 
            </p>
            <div className="flex flex-col">
              {genderStudiesTwo?.map((item: any, index: number) => {
                return (
                  <p className="text-base lg:text-lg text-black" key={index}>
                    <span className="mr-1">{index + 1}.</span>
                    {item}
                  </p>
                );
              })}
              <p className="text-base lg:text-lg text-black">
                 Communication strategy – increases awareness and access to
                information about behavioral health disparities and strategies
                to promote behavioral health equity.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <Image src={bep} alt="bep" loading="lazy" />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Health
