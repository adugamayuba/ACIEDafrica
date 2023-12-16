import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import picA from "../../assets/png/soc-2.png"
import picB from "../../assets/png/socio-b.png"
import Image from 'next/image'
const Brief = () => {
  return (
    <div className="w-full bg-[#F7F7F7] ">
      <ContainerLayout>
        <div className="w-full flex flex-col py-[60px] lg:pb-[180px] lg:pt-20">
          {/* upper session */}
          <div className="w-full flex flex-col lg:flex-row lg:space-x-[80px] space-y-8 lg:space-y-0">
            <div className="w-full lg:w-5/12">
              <Image loading="lazy" alt="acied" src={picA} />
            </div>
            <div className="w-full lg:w-7/12 flex flex-col">
              <p className="mt-8 lg:text-lg text-base text-black max-w-[669px]">
                The Centre focuses on systemic change, bearing in mind
                “inclusivity”: the systems within organizations that must change
                – shifts in policies and practices that promote fairness,
                transparency and accountability. Our in-depth Research for
                Development (R4D) approach delivers an evidence-based and
                analytically sound case for sectors reform, particularly in
                shaping public policies and promoting accountability for
                inclusive growth.
              </p>
              <p className="mt-8 lg:text-lg text-base text-black max-w-[669px]">
                We leverage innovative multimedia technologies to implement
                policy engagement and advocacy communication strategy that aims
                to support both governmental and non-governmental institutions
                to produce, synthesize and communicate successes in policies and
                programmes in ways that will strengthen their impact especially
                in working with issues of inclusive growth. ACIEDafrica’s keen
                interest is to see how government decisions translate into
                improved and equitable services for all, changed outcomes and
                better lives for citizens.
              </p>
            </div>
          </div>
          {/* enf of upper session */}
          {/* lower session */}
          <div className="w-full mt-12 lg:mt-16 flex flex-col-reverse lg:flex-row lg:space-x-[80px] space-y-8">
            <div className="w-full lg:w-7/12">
              <p className="mt-8 lg:text-lg text-base text-black max-w-[669px]">
                We work in collaboration with the partners and institutions as
                well as other interest groups to monitor and measure the impact
                of these changes across and in alignment with the Africa Agenda
                2063 and the 2030 Agenda for Sustainable Development Goals
                (SDGs) - SDG-1&2 (Eradicate Extreme Poverty and Hunger); SDG-3
                (Good Health and Wellbeing); SDG-4 (Inclusive and Quality
                Education); SDG-5 (Gender Equality); SDG-8 (Decent Work and
                Sustainable Economic Growth); SDG-13 (Action to Combat Climate
                Change) and; SDG-16 (Peaceful and Inclusive Societies),  which
                most specifically relate to the work ACIEDafrica supports. 
              </p>
            </div>
            <div className="w-full lg:w-5/12">
              <Image loading="lazy" alt="acied" src={picB} />
            </div>
          </div>
          {/* enf of lower session */}
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Brief
