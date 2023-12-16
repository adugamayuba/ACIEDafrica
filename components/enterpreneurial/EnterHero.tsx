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
            Entrepreneurial Skills, Enterprises Development, TVET, Mentoring and
            Support for Youths and Women in businesses;
          </h1>
          <p className="mt-6 lg:text-lg text-base text-black max-w-[929px]">
            The way we work, learn, take part in society and lead our everyday
            lives is changing with technological developments, global and
            demographic challenges. The right skills and education help
            individuals to adjust to these changes and ensure their well-being
            while contributing to society, productivity and economic growth.
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
