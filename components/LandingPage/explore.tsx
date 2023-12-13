import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout';
import globe from "../../assets/png/half-globe.png";
import Image from 'next/image';
import { A, ArrowForward, B, C } from "../../assets/svg/index"
import { useRouter } from 'next/router';
import Link from 'next/link';
const Explore = () => {
  const router = useRouter();
    return (
      <div className="w-full bg-[#F7F7F7] py-12 lg:py-[160px]">
        <ContainerLayout>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {/* lefr side */}
            <div className="w-full ">
              <div className="w-full flex flex-col max-w-[585px]">
                <h1 className="text-customBlack font-bold noto lg:text-[48px] xl:text-[56px] text-[28px]">
                  Explore how Aciedafrica is amplifying women's voices in
                  Migration decisions.
                </h1>
                <p className="mt-6 text-lg text-customBlack ">
                  Join us in shaping a future where every woman's voice matters
                  and migration decisions are empowered and safe."
                </p>
              </div>
            </div>
            {/* lefr side */}
            <div className="w-full grid lg:grid-cols-2 gap-8 ">
              {/* start  */}
              <div
                className="w-full h-[256px] bg-orange p-6 flex flex-col justify-between cursor-pointer"
                onClick={() => router.push("/about")}
              >
                <p className="text-white noto">
                  Socioeconomic Policy Research, Advocacy and Stakeholders
                  Engagement
                </p>

                <span>
                  <A />
                </span>
              </div>
              {/* end  */}
              {/* start  */}
              <div
                className="w-full h-[256px] bg-black p-6 flex flex-col justify-between cursor-pointer"
                onClick={() => router.push("/safe-migration")}
              >
                <p className="text-white noto">
                  Entrepreneurial Skills, Enterprises Development, TVET,
                  Mentoring and Support for Youth and Women
                </p>

                <span>
                  <B />
                </span>
              </div>
              {/* end  */}
              {/* start  */}
              <div
                className="w-full h-[256px] bg-primary p-6 flex flex-col justify-between"
                onClick={() => router.push("/safe-migration")}
              >
                <p className="text-white noto">
                  Sustainable and Inclusive Agriculture
                </p>

                <span>
                  <C />
                </span>
              </div>
              {/* end  */}
              {/* start  */}
              <Link
                href={"https://www.facebook.com/profile.php?id=61553613248930"}
                className="w-full h-[256px] bg-[#24A83A] p-6 flex flex-col justify-between relative overflow-x-hidden"
              >
                <div className="absolute left-0 right-0 flex justify-end bottom-[10px] z-1">
                  <Image src={globe} alt={""} className="opacity-20" />
                </div>
                <p className="text-white noto">
                  Gender Studies, Disability Rights and Social Development
                </p>

                <div className="border-[#f7f7f7] space-x-2 border flex items-center text-white text-lg font-medium w-fit p-3 ">
                  <span>Contact us</span>
                  <span>
                    <ArrowForward />
                  </span>
                </div>
              </Link>
              {/* end  */}
            </div>
          </div>
        </ContainerLayout>
      </div>
    );
}

export default Explore


