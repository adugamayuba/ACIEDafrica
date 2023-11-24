
import Image from 'next/image'
import intro from "../../assets/png/intro.png";
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
          Welcome to the African Centre for Inclusive Entrepreneurship
          Resilience and Social Innovation (ACIEDafrica), where we are dedicated
          to amplifying women's voices. Join us in our mission to address the
          challenges of irregular migration and human trafficking while
          empowering women to be decision-makers in migration processes.
        </p>
        <div className="mt-12 w-fit">
          <Link
            href="/contact-us"
            // target="_blank"
            // rel="noopener noreferrer"
            className="w-auto  px-8 py-4 bg-white hover:bg-primary text-customBlack hover:text-white flex items-center justify-center "
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
