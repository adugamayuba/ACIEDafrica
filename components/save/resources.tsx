import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import { Rlogo } from '../../assets/svg';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Resources = () => {
    return (
      <div className="bg-primary">
        <div className="w-full  resources-bg  py-[60px] lg:py-[120px]">
          <ContainerLayout>
            <div className="w-full flex items-center justify-center">
              <div className="w-full flex flex-col">
                <h1 className="text-white font-bold text-center lg:text-[48px] text-[28px] ">
                  Resources
                </h1>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 max-w-[1100px] gap-6 mt-10 lg:mt-[60px] mx-auto   ">
                  {/* starty */}
                  <Link href="/"   className="bg-white flex flex-col justify-between min-h-[258px] p-6" >
                    <Rlogo />

                    <p className="text-customBlack font-bold text-sm lg:text-lg">
                      Infographics on safe migration practices
                    </p>
                  </Link>
                  {/* end */}
                  {/* starty */}
                  <Link href="/"   className="bg-white flex flex-col justify-between min-h-[258px] p-6">
                    <Rlogo />

                    <p className="text-customBlack font-bold text-sm lg:text-lg">
                      Educational videos
                    </p>
                  </Link>
                  {/* end */}
                  {/* starty */}
                  <Link href="/"   className="bg-white flex flex-col justify-between min-h-[258px] p-6">
                    <Rlogo />

                    <p className="text-customBlack font-bold text-sm lg:text-lg">
                      Downloadable guides
                    </p>
                  </Link>
                  {/* end */}
                </div>
              </div>
            </div>
          </ContainerLayout>
        </div>
      </div>
    );
}

export default Resources
