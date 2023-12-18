import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
const ProgramStrategy = () => {
  return (
    <div className="w-full bg-[#f8f8f8] py-12 lg:py-[120px]">
      <ContainerLayout>
        <div className="w-full flex flex-col items-center">
          <h1 className="text-3xl lg:text-[48px] xl:text-[56px] font-bold text-black max-w-[814px] text-center lg:leading-[72px]">
            Our programme strategy centres on these objectives
          </h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-[60px]">
            {/* start */}
            <div className="star-one p-8 lg:p-[60px] flex justify-center lg:min-h-[400px] ">
              <p className="text-white text-base lg:text-lg">
                To identify the need for and to provide appropriate therapeutic
                services in the area of speech and hearing by trained and
                certified Special Teachers.
              </p>
            </div>
            {/* end */}
            {/* start */}
            <div className="star-two p-8 lg:p-[60px] flex justify-center lg:min-h-[400px] ">
              <p className="text-white text-base lg:text-lg">
                To provide proper care management of the child.
              </p>
            </div>
            {/* end */}
            {/* start */}
            <div className="star-three p-8 lg:p-[60px] flex justify-center lg:min-h-[400px] ">
              <p className="text-white text-base lg:text-lg">
                To engage parents and families through counseling as an integral
                part of the preparatory intervention and ensure their
                participation in every stage of our child developmental
                programmes.
              </p>
            </div>
            {/* end */}
            {/* start */}
            <div className="star-four p-8 lg:p-[60px] flex justify-center lg:min-h-[400px] ">
              <p className="text-white text-base lg:text-lg">
                To ensure implementation of adequate measure for Disabled child
                education in the targeted area.
              </p>
            </div>
            {/* end */}
            {/* start */}
            <div className="star-five p-8 lg:p-[60px] flex justify-center lg:min-h-[400px] ">
              <p className="text-white text-base lg:text-lg">
                To improve the quality and effectiveness of the educational,
                social and economic growth of the disabled child and children
                from the economically and socially backward background.
              </p>
            </div>
            {/* end */}
            {/* start */}
            <div className="star-six p-8 lg:p-[60px] flex justify-center lg:min-h-[400px] ">
              <p className="text-white text-base lg:text-lg">
                Community sensitization
              </p>
            </div>
            {/* end */}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default ProgramStrategy
