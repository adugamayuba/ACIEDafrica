import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { useRouter } from "next/router";
const EnterHero = () => {
  const router = useRouter();
  return (
    <div className="w-full mt-24 py-2 lg:pt-16 pb-8 lg:pb-16  ">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <span className="cursor-pointer mb-8" onClick={() => router.back()}>
            <Back />
          </span>
          <h1 className="w-full max-w-[929px] font-bold text-customBlack text-[28px] sm:text-[28px] lg:text-[40px] 2xl:text-[64px] text-start ">
            Socioeconomic Policies Research, Advocacy, Campaign and Stakeholders
            Engagement
          </h1>
          <p className="mt-6 lg:text-lg text-base text-black max-w-[929px]">
            The ACIEDafrica's work around policy research, campaign and advocacy
            and engagement is to use evidence based information to enhance
            decisions-making by promoting policy dialogue and win-win strategy
            that offer all people an equal opportunity to create a sustainable
            and inclusive business, and facilitate learning around economic,
            social and environment policies for inclusive growth. The approach
            by the Centre revolves around three pillars:
          </p>
          <p className="mt-8 lg:text-lg text-base text-black max-w-[929px]">
            i. Knowledge production through practical and skills-based policy
            training to support the inclusive learning process (carrying out
            participatory research such as policy analysis and evaluations)
            Knowledge-sharing through effective engagement with all category of
            stakeholders facilitating the exchange of innovative experiences and
            case studies to support learning process from others’ experiences of
            achieving policy change in challenging conditions, and;
          </p>
          <p className="mt-8 lg:text-lg text-base text-black max-w-[929px]">
            ii. Capacity-strengthening & advisory services (promoting the
            collaborative construction of capacity-building activities among
            stakeholder groups).
          </p>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default EnterHero;

const Back = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="39.84" height="39.84" rx="19.92" fill="#F2F4F5" />
      <path
        d="M27.84 18.92V20.92H15.84L21.34 26.42L19.92 27.84L12 19.92L19.92 12L21.34 13.42L15.84 18.92H27.84Z"
        fill="black"
      />
    </svg>
  );
};
