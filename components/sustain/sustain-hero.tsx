import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { useRouter } from "next/router";
import Image from "next/image";
import farm from "../../assets/png/farm.png"
const SustainHero = () => {
  const router = useRouter();
  return (
    <div className="w-full mt-24 py-2 lg:pt-16 pb-8 lg:pb-16  ">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <span className="cursor-pointer mb-8" onClick={() => router.back()}>
            <Back />
          </span>
          <h1 className="w-full max-w-[929px] font-bold text-customBlack text-[28px] sm:text-[28px] lg:text-[40px] 2xl:text-[64px] text-start ">
            Sustainable and Inclusive Agriculture
          </h1>
          <p className="mt-6 lg:text-lg text-base text-black max-w-[929px]">
            ACIEDafrica understands the socio-economic importance of investing
            in agriculture and food security to promote Africa’s inclusive
            growth and development agenda. For us, growth is inclusive when it
            enables the majority of the members of a society to participate in,
            benefit from and contribute to the growth process. Agriculture
            could, therefore, be an important means of stimulating employment,
            incomes and achieving better living standards when the otherwise
            disadvantaged and marginalized rural poor living below the poverty
            line start to experience improvement in productivity and decent
            employment.
          </p>
          <p className="mt-8 lg:text-lg text-base text-black max-w-[929px]">
            ACIEDafrica’s sector intervention outcome will be to promote a
            sustainable and inclusive agri-food system that increases
            agricultural productivity, income, enhances resilience of people and
            their, communities, and pursues lower emissions, contributing to
            improved food security, stability, and healthy diets.
          </p>
        
              </div>
              <div className="w-full mt-10">
                  <Image src={farm} alt="farm" loading="lazy" />
              </div>
      </ContainerLayout>
    </div>
  );
};

export default SustainHero;

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
