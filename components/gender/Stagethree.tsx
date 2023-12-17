import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { HeaderTwo, BodyNormal } from "../HeaderText";

import Image from "next/image";
import sone from "../../assets/png/bep-i.png";
import stwo from "../../assets/png/bep-j.png";
const Stagethree = () => {
  return (
    <div className="w-full py-12 bg lg:py-[120px] bg-[#97092F]">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          {/* upper session */}
          <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center">
            {/* ;eft */}
            <div className="w-full lg:w-7/12 flex flex-col space-y-6 mt-6 lg:mt-0">
              <HeaderTwo text="Gender Studies/Action Learning Methodology " />
              <BodyNormal text="We champion the adaption of Gender Action Learning in Nigeria through a community-led empowerment methodology and integration of gender in development policies and programmes. We build partnership with indigenous communities and community-based organizations in piloting a community-led gender learning process that gives women and men more control over their lives and to support a sustainable movement for gender equality and socioeconomic justice." />
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
                <Image  alt="load" src={stwo}  />
              </span>
            </div>
            <div className="w-full lg:w-7/12 flex flex-col space-y-8">
              <BodyNormal text="The Centre develops/produces gender learning manuals that aim at innovation, learning and advocacy for gender justice in economic interventions and institutions. The manual presents a set of gender methodology/tools for mainstreaming gender into value chain development, policies and programmes with key focus of analyzing and breaking through gender-based barriers at individual level, business and within the household and personal network as challenges that prevent men as well as women from achieving their vision. It intended to support organizations, facilitators and programme designs who may want to promote human rights with focus to understand international instrument for fighting inequalities that are often responsible for poverty and social injustice. " />
              <BodyNormal text="people have value, the Centre continuously strives to promote full community participation for the people with disabilities, and continue to engage Nigeria government on advocacy for disability-friendly infrastructure, access to justice, social services. ACIEDafrica deploys innovative approach to address inclusion of the people with disabilities or vulnerable groups, particularly, strengthening their voice through programmatic interventions, and ensuring that they are specifically included in citizen engagement activities, in order to advocate for themselves and better meet their needs." />
            </div>
          </div>
          {/* end pf of upper session */}
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Stagethree;
