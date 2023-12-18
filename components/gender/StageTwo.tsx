import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import { genderStudiesOne } from '../../utils/test-data'
import { BodyNormal } from '../HeaderText'
import bepo from "../../assets/png/bep-m.png"
const StageTwo = () => {
  return (
    <div className='w-full bg-[#f8f8f8] lg:py-[120px] py-12 '>
          <ContainerLayout>
              <div className="w-full flex flex-col lg:flex-row lg:justify-between">
                  <div className="w-full lg:w-5/12">
                      <Image src={bepo} alt='bep' loading='lazy' />
                  </div>
                  <div className="w-full lg:w-5/12 flex flex-col justify-center">
                      {
                          genderStudiesOne?.map((item: any, index: number) => {
                              return (
                                  <span className='flex  text-black text-base lg:text-lg' key={index}>
                                   {index + 1}.   
                                  <BodyNormal color='text-black' className='ml-2' text={item} key={index} />
                                  </span>
                              )
                          })
                      }
                  </div>

              </div>
      </ContainerLayout>
    </div>
  )
}

export default StageTwo
