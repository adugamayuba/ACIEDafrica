
import Image from 'next/image'
import intro from "../../assets/png/cry-woman.png";
import Link from 'next/link';
const Introduction = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row ">
      <div className="w-full lg:w-5/12">
        <Image src={intro} alt="intro" className="w-full h-auto" />
      </div>
      <div className="w-full lg:w-7/12 bg-black flex items-center  justify-center">
        <div className="flex flex-col max-w-[585px] px-4 py-4 lg:py-0">
          <h1 className="text-white text-[28px] mt-4 xl:text-[56px] nuto font-bold ">
            Introduction
          </h1>
          <p className="text-white text-lg mt-6 max-w-[585px] w-full">
            ACIEDafrica is a non-governmental knowledge-based, capability, skill
            development and Advocacy Centre. The Centre is driven by holistic
            and collective community action approaches where everyone has the
            opportunity to turn their unique gifts or talents into legitimate
            businesses that contribute to sustainable, resilient, and equitable
            shared community wealth. With this objective in mind, ACIEDafrica
            promotes equitable and sustainable socioeconomic growth and
            inclusion in Nigeria and Africa.
          </p>
          <div className="mt-12 w-fit">
            <Link
              href="/safe-migration"
              // target="_blank"
              // rel="noopener noreferrer"
              className="w-auto  px-8 py-4 bg-orange hover:bg-white text-white hover:text-customBlack flex items-center justify-center  rounded-[4px]"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction
