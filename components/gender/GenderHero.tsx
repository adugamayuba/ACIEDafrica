import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { useRouter } from "next/router";

const GenderHero = () => {
  const router = useRouter();
  return (
    <div className="w-full mt-24 py-2 lg:pt-16 pb-8 lg:pb-16  ">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <span className="cursor-pointer mb-8" onClick={() => router.back()}>
            <Back />
          </span>
          <h1 className="w-full max-w-[929px] font-bold text-customBlack text-[28px] sm:text-[28px] lg:text-[40px] 2xl:text-[64px] text-start ">
            Gender Studies, Disability, Social Development
          </h1>
          <p className="mt-6 lg:text-lg text-base text-black max-w-[929px]">
            ACIEDafrica recognizes that disadvantage takes multiple forms of
            inequalities, and women and girls across the continent are
            disproportionately affected by deeply rooted social injustice and
            gender inequalities and a number of structural barriers to
            sociopolitical and economic empowerment. The obstacles that
            marginalized people or excluded groups in semi-urban and rural
            communities especially girls, children, young women, widows, people
            with disabilities, older persons and non-binary youth often face the
            most discrimination.
          </p>
          <p className="mt-8 lg:text-lg text-base text-black max-w-[929px]">
            Keeping gender, equity and inclusion is at the heart of everything
            we do, ACIEDafrica develops and test scalable innovations that
            enhance opportunities for young lives, particularly girls and young
            women from poor and vulnerable communities, to succeed in life and
            contribute to society with the conviction that women and men
            together are transformative agents of economic and social change in
            African economies. We are committed to approaching our work through
            intersectional and gender lens.
          </p>
          <p className="mt-8 lg:text-lg text-base text-black max-w-[929px]">
            Towards achieving the gender equality and inclusion goal,
            ACIEDafrica adopts a multi-sectoral approach, as more inclusive
            public policies are essential if Nigeria or Africa is to achieve its
            poverty reduction targets and achieve sustainable economic growth.
            ACIEDafrica’s strategy to mainstream gender and inclusion
            perspectives in policymaking is to engage government partners and
            stakeholders to integrate principles and practices that promote
            gender and inclusion in research and policy dialogue. Through such
            partnership, ACIEDafrica provides technical support to mainstream
            gender and inclusion perspectives and produce gender-sensitive
            policy recommendation.
          </p>
        </div>
      
      </ContainerLayout>
    </div>
  );
};

export default GenderHero;

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
