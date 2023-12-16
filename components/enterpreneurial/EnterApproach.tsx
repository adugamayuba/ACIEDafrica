import React from 'react'
import act from "../../assets/svg/act.svg"
import non from "../../assets/svg/non-act.svg"
import Image from 'next/image'
import ContainerLayout from '../../Layouts/ContainerLayout'
const EnterApproach = () => {
  return (
    <div className="w-full green-bg py-10 lg:py-[120px]">
      <ContainerLayout>
        <div className="w-full flex flex-col ">
          <h1 className="text-white font-bold  xl:text-[56px] text-3xl sm:text-[36px] mb-8"  >
            Our Approach
          </h1>
          <p className="mt-3 text-white max-w-[668px]">
            ACIEDafrica considers lack of education and skills mismatches to be
            principal obstacles for young people in labour markets. In Nigeria,
            lack of proper training has been identified as one of the main
            reasons why young people do not find jobs. Young people therefore
            need more comprehensive education that responds to labour market
            needs, in terms of quality and relevance (including technical and
            vocational training). While we recognize youth as an integral to the
            overall global agenda and the Sustainable Development Goals (SDGs),
            ACIEDafrica is sharpening its focus on inclusive entrepreneurship
            and employment through Entrepreneurial Skills, Technical Vocational
            Education and Training. The Centre is at the forefront of forging
            purposeful labor market integration by strengthening people’s skills
            and providing them with knowledge, moral and intellectual virtues
            that form the basis for life-long learning and contribution to the
            national economic growth. We specifically provide rural and
            semi-urban youth with training and employment opportunities that
            help lift them and their families out of poverty.
                  </p>
                  <div className="flex items-center mt-8 lg:mt-12 space-x-3">
                      <span>
                          <Image src={act} alt="sdjjsd" />
                      </span>
                      <span>
                          <Image src={non} alt="sdjjsd" />
                      </span>
                      <span>
                          <Image src={non} alt="sdjjsd" />
                      </span>
                      <span>
                          <Image src={non} alt="sdjjsd" />
                      </span>
                      <span>
                          <Image src={non} alt="sdjjsd" />
                      </span>
                      <span>
                          <Image src={non} alt="sdjjsd" />
                      </span>
                      <span>
                          <Image src={non} alt="sdjjsd" />
                      </span>
                  </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default EnterApproach
