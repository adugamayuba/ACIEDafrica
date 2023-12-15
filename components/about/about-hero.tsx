import ContainerLayout from "../../Layouts/ContainerLayout";

const AboutHero = () => {
  return (
    <div className="w-full flex flex-col relative min-h-screen mb-4 lg:mb-64 bg-white ">
      <div className="w-full about-hero-bg  flow-hide min-h-[720px] flex flex-col justify-center items-center">
        <ContainerLayout>
          <div className="w-full flex flex-col justify-center ">
            <h1 className="text-white xl:text-[64px] lg:text-[56px] text-[28px] font-bold ">
              About Us
            </h1>
            <p className="text-white text-base lg:text-xl max-w-[768px] w-full">
              ACIEDafrica is a non-governmental knowledge-based, capability,
              skill development and Advocacy Centre. The Centre is driven by
              holistic and collective community action approaches where everyone
              has the opportunity to turn their unique gifts or talents into
              legitimate businesses that contribute to sustainable, resilient,
              and equitable shared community wealth. With this objective in
              mind, ACIEDafrica promotes equitable and sustainable socioeconomic
              growth and inclusion in Nigeria and Africa.
            </p>
          </div>
        </ContainerLayout>
      </div>
      <div className="w-full lg:absolute lg:-bottom-52 mt-6 lg:mt-0 ">
        <ContainerLayout>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 ">
            {/* starr */}

            <div className="w-full flex flex-col about-one xl:p-[60px] lg:p-12 p-8">
              <h1 className="text-2xl lg:text-[36px] font-bold text-white">
                Vision
              </h1>
              <p className="text-white text-lg mt-6">
                A Prosperous Africa Based on Inclusive Growth and Sustainable
                Development
              </p>
            </div>

            {/* end */}
            {/* starr */}

            <div className="w-full flex flex-col about-two xl:p-[60px] lg:p-12 p-8">
              <h1 className="text-2xl lg:text-[36px] font-bold text-white">
                Mission
              </h1>
              <p className="text-white text-lg mt-6">
                To stimulate productive inclusion through the development of
                capabilities, skills, rights and opportunities for everyone,
                particularly the poor, marginalized and excluded groups, as well
                as low income workers in order to guarantee that everyone
                benefits equitably from the social and economic growth processes
                and gets engaged in it.
              </p>
            </div>

            {/* end */}
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
}

export default AboutHero
