
import ContainerLayout from '../../Layouts/ContainerLayout'

const Gallery = () => {
  return (
    <div className="w-full">
      <ContainerLayout>
              <div className="w-full flex flex-col items-center">
                  <div className='bg-[#d9d9d9] w-fit rounded-[4px]'>
                      
                  </div>
          <h1 className="w-full max-w-[814px] font-bold text-customBlack text-[28px] sm:text-[28px] lg:text-[40px] 2xl:text-[64px] text-center ">
            Explore our gallery to see the impact we have made
          </h1>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Gallery
