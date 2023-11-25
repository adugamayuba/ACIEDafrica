
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image';
import pic from "../../assets/png/obj-pic.png"
const Objectives = () => {
  return (
    <div className="w-full py-16 lg:py-[120px]">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <div className="flex flex-col">
            <div className="w-full flex lg:flex-row lg:items-center lg:justify-between flex-col">
              <div className="flex flex-row gap-2 w-full max-w-[624px]">
                <h1 className="text-[28px] font-[300] noto lg:text-[48px]">
                  Objective II:
                              <span className='font-bold ml-2'>
                                  
                  Objective Raising Awareness on Safe Migration
                
             </span>
                </h1>
              </div>
              <div className="flex flex-col w-full max-w-[624px]">
                <p className="text-lg noto text-black mt-6 lg:mt-0">
                  Discover the inspiring stories of women who have played a
                  crucial role in migration decisions. Through interviews, case
                  studies, and testimonials, ACIEDafrica showcases the strength
                  and resilience of women who have shaped their migration
                  journeys.
                </p>
              </div>
            </div>
          </div>
          {/* lower side */}
          <div className="w-full mt-8 lg:mt-16 ">
            <Image src={pic} alt="pic" />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Objectives
