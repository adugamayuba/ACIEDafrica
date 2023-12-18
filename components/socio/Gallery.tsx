
import ContainerLayout from '../../Layouts/ContainerLayout'
import banner from "../../assets/png/banner.png"
import Image from 'next/image';
import non from "../../assets/svg/active.svg"
import active from "../../assets/svg/non-active.svg"

const Gallery = ({images} : {images:any}) => {
  return (
    <div className="w-full lg:py-[120px] py-10">
      <ContainerLayout>
              <div className="w-full flex flex-col items-center">
                  <div className='bg-[#d9d9d9] min-w-[115px] flex items-center justify-center h-[38px] rounded-[4px]'>
                      Gallery
                  </div>
          <h1 className="w-full max-w-[860px] font-bold text-customBlack text-[28px] sm:text-[28px] lg:text-[40px] 2xl:text-[64px] text-center mb-[60px] ">
            Explore our gallery to see the impact we have made
          </h1>
          <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-3">
            {
              images?.map((item: any, index: number) => {
                return (
                  <div className="w-full" key={index}>
                    <Image
                      src={item}
                      alt="banner"
                      loading="lazy"
                      className="rounded-[8px]"
                    />
                  </div>
                );
              })
            }
          
          </div>
          <div className="mt-8 lg:mt-[60px] flex items-center justify-center space-x-[10px]">
            <span>
              <Image src={active} alt='hshs'  />
            </span>
            <span>
              <Image src={non} alt='hshs'  />
            </span>
            <span>
              <Image src={non} alt='hshs'  />
            </span>
            <span>
              <Image src={non} alt='hshs'  />
            </span>
            <span>
              <Image src={non} alt='hshs'  />
            </span>
            <span>
              <Image src={non} alt='hshs'  />
            </span>
            <span>
              <Image src={non} alt='hshs'  />
            </span>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Gallery
