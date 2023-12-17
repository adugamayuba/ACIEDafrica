import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout';
import globe from "../../assets/png/pic-a.png";
import Image from 'next/image';
import second from "../../assets/svg/stars.svg";
import third from "../../assets/svg/drum.svg";
import fourth from "../../assets/svg/child.svg";
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
                <h1 className="text-customBlack font-bold noto  lg:text-[48px] xl:text-[56px] text-[28px] max-w-[814px]">
                  ACIEDafrica’s 4 Thematic Or Core Areas Of Activity
                </h1>
              </div>
            </div>
            {/* lefr side */}
            <div className="w-full grid lg:grid-cols-2 gap-8 ">
              {/* start  */}
              <Link
                href={"/socio"}
                className="w-full h-[258px] bg-[#0A2449] p-6 flex flex-col justify-between relative overflow-x-hidden overflow-y-hidden rounded-[8px]"
              >
                <div className="absolute left-0 right-[-88px] bottom-[-88px] flex justify-end  z-1">
                  <Image src={globe} alt={""} className="" />
                </div>
                <p className="text-white noto font-bold">
                  Socioeconomic Policy Research, Advocacy and Stakeholders
                  Engagement
                </p>

                <div className="learn-btn w-fit">Learn more</div>
              </Link>
              {/* end  */}
              {/* start  */}
              <Link
                href={"/enterpreneurial"}
                className="w-full h-[258px] bg-orange p-6 flex flex-col justify-between relative overflow-x-hidden overflow-y-hidden rounded-[8px]"
              >
                <div className="absolute left-0 right-[-5px] bottom-[-5px] flex justify-end  z-1">
                  <Image src={second} alt={""} className="" />
                </div>
                <p className="text-white noto font-bold">
                  Entrepreneurial Skills, Enterprises Development, TVET,
                  Mentoring and Support for Youth and Women
                </p>

                <div className="learn-btn w-fit">Learn more</div>
              </Link>
              {/* end  */}
              {/* start  */}
              <Link
                href={"/sustain"}
                className="w-full h-[258px] bg-[#24A83A] p-6 flex flex-col justify-between relative overflow-x-hidden overflow-y-hidden rounded-[8px]"
              >
                <div className="absolute left-0 right-[-5px] bottom-[-5px] flex justify-end  z-1">
                  <Image src={third} alt={""} className="" />
                </div>
                <p className="text-white noto font-bold">
                  Sustainable and Inclusive Agriculture
                </p>

                <div className="learn-btn w-fit">Learn more</div>
              </Link>
              {/* end  */}
              {/* start  */}
              <Link
                href={"/gender"}
                className="w-full h-[258px] bg-[#97092F] p-6 flex flex-col justify-between relative overflow-x-hidden overflow-y-hidden rounded-[8px]"
              >
                <div className="absolute left-0 right-[-5px] bottom-[-5px] flex justify-end  z-1">
                  <Image src={fourth} alt={""} className="" />
                </div>
                <p className="text-white noto font-bold">
                  Gender Studies, Disability Rights and Social Development
                </p>

                <div className="learn-btn w-fit">Learn more</div>
              </Link>
              {/* end  */}
            </div>
          </div>
        </ContainerLayout>
      </div>
    );
}

export default Explore


