import ContainerLayout from "../../Layouts/ContainerLayout";

const AboutHero = () => {
    return (
      <div className="w-full about-hero-bg py-24 flow-hide min-h-[720px] flex flex-col justify-center items-center">
        <ContainerLayout>
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-white xl:text-[64px] lg:text-[56px] text-[28px] font-bold ">
              About Us
            </h1>
            <p className="text-white text-base lg:text-xl">
              Advancing Equitable, Sustainable Socio-Economic Growth
            </p>
          </div>
        </ContainerLayout>
      </div>
    );
}

export default AboutHero
