import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import one from "../../assets/png/bep-q.png";
import two from "../../assets/png/bep-e.png";
import three from "../../assets/png/bep-f.png";
import four from "../../assets/png/flat-4.png";
const GenderGallery = () => {
  return (
    <div className='w-full flex py-12  '>
          <ContainerLayout>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                      <Image src={one} alt='one' loading='lazy' />
                  </div>
                  <div>
                      <Image src={two} alt='two' loading='lazy' />
                  </div>
                  <div>
                      <Image src={three} alt='three' loading='lazy' />
                  </div>
                  <div>
                      <Image src={four} alt='four' loading='lazy' />
                  </div>
              </div>
      </ContainerLayout>
    </div>
  )
}

export default GenderGallery
