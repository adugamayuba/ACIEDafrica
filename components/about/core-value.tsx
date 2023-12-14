import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'

const CoreValue = () => {
  return (
    <div className="w-full flex flex-col bg-white py-[120px]">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <h1 className="text-black font-bold xl:text-[56px] mb-[60px] lg:text-[40px] text-3xl text-center leading-[60px] ">
            ACIEDafrica’s CORE VALUE
          </h1>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* start */}
            <div className="w-full about-three  xl:p-[60px] sm:p-12 p-8 flex flex-col text-white rounded-[8px] min-h-[300px] lg:min-h-[500px]">
              <h1 className="text-2xl sm:text-[36px] text-white font-bold">
                Cooperation
              </h1>
              <p className="w-full sm:text-lg text-sm mt-6">
                We work in a spirit of trust, collaboration and partnership
                across departments and with our community to achieve our shared
                goals.
              </p>
            </div>
            {/* end of a card */}
            {/* start */}
            <div className="w-full about-two-s sm xl:p-[60px] sm:p-12 p-8 flex flex-col text-white rounded-[8px] min-h-[300px] lg:min-h-[500px]">
              <h1 className="text-2xl sm:text-[36px] text-white font-bold">
                Integrity
              </h1>
              <p className="w-full sm:text-lg text-sm mt-6">
                We take accountability for our actions and deliver what we
                promise. We are truthful and honest in how we do our job. We
                inspire public confidence and trust in our municipal government.
              </p>
            </div>
            {/* end of a card */}
            {/* start */}
            <div className="w-full about-one-s sm xl:p-[60px] sm:p-12 p-8 flex flex-col text-white rounded-[8px] min-h-[300px] lg:min-h-[500px]">
              <h1 className="text-2xl sm:text-[36px] text-white font-bold">
                Innovation
              </h1>
              <p className="w-full sm:text-lg text-sm mt-6">
                We embrace innovation to improve our delivery of services. We
                take initiative, and are flexible and creative in anticipating
                and adapting to changing conditions.
              </p>
            </div>
            {/* end of a card */}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default CoreValue
