import ContainerLayout from "../../Layouts/ContainerLayout"
import Image from "next/image";
import pic from "../../assets/png/vision-pic.png"
const Mission = () => {
  return (
    <div className="w-full bg-primary lg:py-[120px] py-16">
      <ContainerLayout>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* start */}
          <div className="w-full">
            <div className="w-full flex flex-col lg:max-w-[300px]">
              <h1 className="text-white font-bold lg:text-[36px] text-2xl inter">
                Vision
              </h1>
              <p className="text-white lg:text-lg text-sm mt-6 ">
                A Prosperous Africa Based on Inclusive Growth and Sustainable
                Development
              </p>
            </div>
          </div>

          {/* end */}
          {/* start */}
          <div className="w-full">
            <div className="w-full flex flex-col lg:max-w-[300px]">
              <h1 className="text-white font-bold lg:text-[36px] text-2xl inter">
                Mission
              </h1>
              <p className="text-white lg:text-lg text-sm mt-6 ">
                To stimulate productive inclusion through the development of
                capabilities, skills, rights and opportunities for everyone,
                particularly the poor, marginalized and excluded groups, as well
                as low income workers in order to guarantee that everyone
                benefits equitably from the social and economic growth processes
                and gets engaged in it.
              </p>
            </div>
          </div>

          {/* end */}
          {/* start */}
          <div className="w-full">
            <Image src={pic} alt="pic" />
          </div>

          {/* end */}
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Mission
