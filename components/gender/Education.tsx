import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import bep from "../../assets/png/bep-x.png";
import { HeaderTwo,  } from "../HeaderText";

const Education = () => {
  return (
    <div className="w-full py-12 lg:py-[120px] bg-white">
      <ContainerLayout>
        <div className="w-full flex lg:flex-row-reverse flex-col-reverse space-y-8 lg:space-y-0  lg:justify-between lg:items-center">
          <div className="w-full lg:w-6/12 flex flex-col">
            <HeaderTwo text="Education" color="text-black" className="mb-6" />
            <p className="text-base lg:text-lg text-black mb-8 ">
              <span className="font-bold">
                Inclusive Education for the Disabled, and Children at Risk
                Program – 
              </span>
              By confronting poverty, lacking infrastructure and socio-cultural
              discrimination, we strive to provide a quality education and a
              brighter future for the under-privileged child who might otherwise
              have no education. ACIEDafrica works in indigenous communities to
              increase access to quality primary education to some of the most
              disadvantaged out of school children (OOSC). We pursuit inclusive
              education for the Disabled and Poor Children through innovative
              interventions, facilitation, capacity building, strengthening and
              initiation of community approach for sustainable development. We
              support friendly and caring teaching methods to impart education
              to the disabled children or at risk children without giving extra
              mental pressure or burden and extend their education in a
              meaningful constructive way.
            </p>

         
             
            
          </div>
          <div className="w-full lg:w-5/12">
            <Image src={bep} alt="bep" loading="lazy" />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Education;
