import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout';
import { HeaderTwo, BodyNormal } from '../HeaderText';
import { sustainableTwo, sustainableThree } from '../../utils/test-data';
import Image from 'next/image';
import sone from "../../assets/png/s-one.png";
import stwo from "../../assets/png/s-two.png";
const SustainSupport = () => {
    return (
      <div className="w-full py-12 bg lg:py-[120px] bg-[#24A83A]">
        <ContainerLayout>
          <div className="w-full flex flex-col">
            {/* upper session */}
            <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center">
              {/* ;eft */}
              <div className="w-full lg:w-7/12 flex flex-col space-y-6 mt-6 lg:mt-0">
                <HeaderTwo text="ACIEDafrica’s support for youth and women in agribusiness" />
                <ul className="px-5 list-disc text-white">
                  {sustainableTwo?.map((item: any, index: number) => {
                    return (
                      <li key={index}>
                        <BodyNormal text={item} />
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* right */}
              <div className="w-full lg:w-4/12">
                <span>
                  <Image loading="lazy" alt="load" src={sone} />
                </span>
              </div>
            </div>
            {/* end pf of upper session */}
            {/* upper session */}
            <div className="w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:justify-between lg:items-center mt-12 lg:mt-20">
              <div className="w-full lg:w-4/12">
                <span>
                  <Image loading="lazy" alt="load" src={stwo} />
                </span>
              </div>
              <div className="w-full lg:w-7/12">
                <ul className="px-5 list-disc text-white">
                  {sustainableThree?.map((item: any, index: number) => {
                    return (
                      <li key={index}>
                        <BodyNormal text={item} className='capitalize' />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* end pf of upper session */}
          </div>
        </ContainerLayout>
      </div>
    );
}

export default SustainSupport
