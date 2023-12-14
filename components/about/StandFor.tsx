import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image';
import one from "../../assets/png/abt-one.png"
import two from "../../assets/png/abt-two.png"
const dataItems = [
  `We strengthen the competencies and skills of people, improving their employability or access to business opportunities and services; `,
  `We increase the competitiveness of enterprises, growing their business. `,
  `We build partnership, collaboration and network with national, sub-national and international institutions/bodies to foster economic and social systems, promoting inclusive development; `,
  `We promote wider access to productive knowledge that enhances sustainable growth.
`,
  `Promote peaceful co-existence among people and enhance integration, especially the integration of smaller and landlocked communities into development;`,
 
];

const dataSecond = [
  `Promote inclusive entrepreneurship, social innovations and policy initiatives that offer all people an equal opportunity to create sustainable business and also encouraging and protecting the participation of the vulnerable groups (including the disabled people, older persons) in the labour market;`,
  `Promote wider equal access to basic infrastructure and basic/quality social services;
`,
  `We render humanitarian and development services that promote economic well-being of the people, safe healthy life and enhance resilience of the people particularly poor and vulnerable groups to respond to crisis and shocks, including social-environmental risks.`,
  `Undertake policy related studies on pro-poor market related issues and utilize the research results in developing networks amongst stakeholders in order to have a positive impact on policies and planning related to pro-poor market development.`,
 
];
const StandFor = () => {
  return (
    <div className="w-full lg:py-[120px] py-8 bg-[#97092F]">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          {/* upper session */}
          <div className="w-full flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
            <div className="w-full flex flex-col lg:w-7/12 mt-6 lg:mt-0 px-4">
              <h1 className="text-white font-bold  xl:text-[56px] text-3xl sm:text-[36px]">
                What we stand for
              </h1>
              <ul className="list-disc flex flex-col mt-3">
                {dataItems?.map((item: any, index: number) => {
                  return (
                    <li key={index} className="text-white lg:text-lg text-sm w-full">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full lg:w-4/12">
              <Image src={two} alt="one" />
            </div>
          </div>
          {/* end of upper session */}
          {/* lower session */}
          <div className="mt-10 lg:mt-20 flex-col flex lg:flex-row lg:justify-between px-4 ">
            <div className="w-full lg:w-4/12">
              <Image src={one} alt="two" />
            </div>
            <div className="w-full lg:w-7/12 mt-6 lg:mt-0">
              <ul className="list-disc flex flex-col mt-3 space-y-2">
                {dataSecond?.map((item: any, index: number) => {
                  return (
                    <li key={index} className="text-white lg:text-lg text-sm">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* end of lower session */}
        </div>
      </ContainerLayout>
    </div>
  );
}

export default StandFor
