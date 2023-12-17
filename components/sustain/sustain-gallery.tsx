import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import bepA from "../../assets/png/bep-c.png";
import bepB from "../../assets/png/bep-o.png";
import bepC from "../../assets/png/bep-p.png";
const SustainGallery = () => {
  return (
    <div className='w-full py-12 lg:py-[120px] '>
          <ContainerLayout>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                  <span>
                        <Image className='object-contain' loading='lazy' alt='loai' src={bepA} />
                  </span>
                  <span>
                        <Image className='object-contain' loading='lazy' alt='loai' src={bepB} />
                  </span>
                  <span>
                        <Image className='object-contain' loading='lazy' alt='loai' src={bepC} />
                  </span>
              </div>
      </ContainerLayout>
    </div>
  )
}

export default SustainGallery
