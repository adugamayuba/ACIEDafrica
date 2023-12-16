
import ContainerLayout from "../../Layouts/ContainerLayout";
import { entrepreneurialSkillsTwo } from "../../utils/test-data";
import entpic from "../../assets/png/ent-pic.png";
import Image from "next/image";
import emp from "../../assets/png/emp.png"
const CoreB = () => {
  return (
    <div className="w-full flex flex-col bg-[#0A2449E5] py-12 lg:py-[120px]">
      <ContainerLayout>
        <div className="w-full flex flex-col-reverse space-y-8 lg:space-y-0 lg:flex-row-reverse lg:justify-between">
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="font-bold text-2xl lg:text-[36px] lg:leading-[50px] text-white mt-8 lg:mt-0">
              The ACIEDafrica’s core mandates on Entrepreneurship Skills
              Development in Technical Vocational Education and Training (TVET)
            </h1>
            <p className="text-base lg:text-lg mt-6 text-white">
              Mainstream inclusion principles and practice in entrepreneurship
              education in Technical and Vocational Education and Training
              (TVET) Scheme of the Centre; 
            </p>
            <ul className="flex flex-col space-y-1 text-white list-disc px-4">
              {entrepreneurialSkillsTwo.map((item, index) => (
                <li className="text-base lg:text-lg text-white" key={index}>
                 
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-5/12 ">
            <Image src={emp} alt="ent" loading="lazy" />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default CoreB;
