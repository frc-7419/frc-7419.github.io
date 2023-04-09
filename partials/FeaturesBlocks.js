import React from "react";
import { FaHandshake } from "react-icons/fa";
import { RiCommunityFill, RiRobotFill } from "react-icons/ri";
import NewCarousel from "../utils/NewCarousel";
import GoodRobot2020 from "../public/static/images/GoodRobot2020.js";
function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 px-12">
//           {/* Section header */}
//           <div className="md:pb-20 -ml-14 mb-24 flex flex-col md:flex-row items-center space-x-10">
//             <img
//               className="relative float-left rounded flex-1"
//               width="40%"
//               src="/static/images/roboblur.png"
//               alt="Hero"
//             />
//             <div className="flex flex-[2_2_0%] flex-col">
//               <h1
//                 className="text-3xl  px-2 md:text-4xl text-black font-extrabold leading-tighter tracking-tighter mb-4"
//                 data-aos="zoom-y-out"
//               >
//                 Recent News
//               </h1>
//               <p className="text-xl text-gray-600 item-body px-2 ">
//                 We’re so happy to have qualified for the FRC World Championships after being part of the winning alliance at the Silicon Valley Regional! Along with our alliance partners, Team 254, the Cheesy Poofs and the Team 1678, Citrus Circuits, we set a new world record of 179 points!</p>
//             </div>
//           </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FaHandshake className="h-16 w-16 p-1 -mt-1 mb-2 text-blue-600 hover:animate-spin" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Teamwork
              </h4>
              <p className="text-gray-600 text-center">
                Our team is mentor driven but student organized. We help train,
                elevate, and support each other while holding ourselves
                accountable.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <RiCommunityFill className="h-16 w-16 p-1 -mt-1 mb-2 text-blue-600 hover:animate-spin duration-300" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Community
              </h4>
              <p className="text-gray-600 text-center">
                We support our community by sharing our knowledge, mentoring
                younger students, and getting kids excited about STEM through
                our outreach program.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <GoodRobot2020 size="4rem" color="#2563eb" autoSpin={false} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Also Robots
              </h4>
              <p className="text-gray-600 text-center">
                Let's face it, building robots is fun. We are proud of our
                exceptional student-built FTC robots and look forward to
                continuing our tradition in FRC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
