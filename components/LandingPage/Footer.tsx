import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import logo from "../../assets/png/acid-logo.png";
import Link from 'next/link';
import { LinkedIn,Twitter,Instagram,Facebook } from '../../assets/svg';
import { BiEnvelope } from "react-icons/bi"
import { BsTelephone } from "react-icons/bs"
import {HiOutlineLocationMarker} from "react-icons/hi"
import { ArrowRight, WhiteLogo } from '../../assets/svg';
const navigation = [
  {
    url: "/safe-migration",
    name: "Save migration",
  },
  {
    url: "/about",
    name: "About us",
  },
  {
    url: "#contact",
    name: "Contact us",
  },
 

];
const privacy = [
  {
    url: "#",
    name: "Our Blog",
  },
  {
    url: "#",
    name: "FAQs",
  },

];

const terms = [
  {
    url: "https://www.facebook.com/profile.php?id=61553613248930",
    name: "Our Blog",
  },
  {
    url: "https://www.facebook.com/profile.php?id=61553613248930",
    name: "FAQs",
  },
  {
    url: "https://www.facebook.com/profile.php?id=61553613248930",
    name: "Privacy policy",
  },
];
const Footer = () => {
    return (
      <div className="w-full flex lg:flex flex-col bg-customBlack flow-hide">
        <div className="w-full flow-hide ">
          <ContainerLayout>
            <div className="w-full flex flex-col flow-hide">
              {/* uper session */}
              <div className="w-full flex lg:flex-row flex-col lg:justify-between my-20">
                <div className="w-full lg:w-3/12 flex flex-col">
                  <span>
                    <Image src={logo} alt="logo" />
                  </span>
                  <p className="text-white lg:w-full text-sm mt-4">
                    Explore how Aciedafrica is amplifying women's voices in
                    Migration decisions.
                  </p>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61553613248930"
                    target='_blank'
                    className="mt-6 flex space-x-2 items-center"
                  >
                    <p className="text-[#ebebeb] text-base font-medium ">
                      Learn More
                    </p>
                    <ArrowRight />
                  </Link>
                </div>
                <div className=" w-full lg:w-8/12 flex lg:flex-row  lg:justify-between flex-wrap ">
                  {/* start of a park */}
                  <div className="w-1/2 lg:w-4/12 flex flex-col mt-8 lg:mt-0">
                    <h1 className="font-bold text-white lg:text-xl">
                      Navigation
                    </h1>
                    <div className="flex flex-col space-y-[18px] mt-7">
                      {navigation?.map((item: any, index: number) => {
                        return (
                          <Link
                            key={index}
                            href={item.url}
                            className="text-white text-sm lg:text-sm"
                          >
                            {item?.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  {/* send of a parck */}
                  {/* start of a park */}
                  {/* <div className="w-1/2 lg:w-3/12 flex flex-col mt-8 lg:mt-0">
                    <h1 className="font-bold text-white lg:text-xl">
                      Privacy Policy
                    </h1>
                    <div className="flex flex-col space-y-[18px] mt-7">
                      {privacy?.map((item: any, index: number) => {
                        return (
                          <Link
                            key={index}
                            href={item.url}
                            className="text-white text-sm lg:text-sm"
                          >
                            {item?.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div> */}
                  {/* send of a parck */}
                  {/* start of a park */}
                  <div className="w-1/2 lg:w-4/12 flex flex-col mt-8 lg:mt-0">
                    <h1 className="font-bold text-white lg:text-xl">
                      Terms of Service
                    </h1>
                    <div className="flex flex-col space-y-[18px] mt-7">
                      {terms?.map((item: any, index: number) => {
                        return (
                          <Link
                            key={index}
                            href={item.url}
                            target='_blank'
                            className="text-white text-sm lg:text-sm"
                          >
                            {item?.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  {/* send of a parck */}

                  <div className="w-1/2 lg:w-3/12 flex flex-col mt-8 lg:mt-0">
                    <h1 className="font-bold text-white  lg:text-xl">
                      Follow Us On
                    </h1>
                    <div className="w-full flex items-center space-x-4 mt-5">
                      <Link
                        href="https://www.facebook.com/profile.php?id=61553613248930"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook />
                      </Link>
                      <Link
                        href="https://ng.linkedin.com/company/african-centre-for-inclusive-entrepreneurship-resilience-and-social-innovation-acied?trk=public_profile_experience-item_profile-section-card_image-click"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedIn />
                      </Link>
                      <Link
                        href="https://twitter.com/aciedafrica"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter />
                      </Link>
                      <Link
                        href="https://www.instagram.com/aciedafrica/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* lower session */}
            </div>
          </ContainerLayout>
        </div>
        <div className="w-full flex bg-customBlack flow-hide ">
          <ContainerLayout>
            <div className="w-full flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center py-4 lg:py-0 lg:h-20 border-t border-t-white">
              <p className="text-sm lg:text-sm text-[#fff] text-center lg:text-start">
                Copyright © 2023 ACIED Africa. All Rights Reserved
              </p>
              <div className="hidden lg:flex">
                <p className="text-sm lg:text-base text-[#fff]"></p>
                <span>
                  <Link
                    href="#"
                    className="text-sm lg:text-base text-white  mr-1 ml-1"
                  >
                    Terms and Conditions
                  </Link>
                </span>

                <span>
                  <Link
                    href="#"
                    className="text-sm lg:text-base text-white  ml-1"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>
            </div>
          </ContainerLayout>
        </div>
      </div>
    );
}

export default Footer
