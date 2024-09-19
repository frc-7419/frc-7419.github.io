import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.js";
import Carousel from "../utils/Carousel";
import {
  GiSteeringWheel,
  GiKnifeFork,
  GiBowman,
  GiMuscleUp,
} from "react-icons/gi";
function RobotFeatures2024() {
  const driveTrain = [
    [
      "https://lh6.googleusercontent.com/WekIublqmrJaTUt04gvw8ZQM67vtfg8H1RRupNCspI9tFtkhn-XYuM7c4HHOKNzYsrdXY_XTJXo4dpbF8aSs7T7t0aaSkfQnM9tEguSb6r72I5spn97xcm9T62HBOxtBgEAhZQyC",
      0,
      500,
    ],
  ];

  const turretShooter = [
    [
      "https://lh4.googleusercontent.com/x629ou6uWIg7DikKH4o2B753ZINtSlDKDfdKMUT2KELnNKhf_ae45TgwVaqoOEDIOvvr_eMKx_7B6uwSHZETS_2vXA65X-_Jh8HpmebZ28vZl5-IbXVlzuwOR1ztCJHVLU43WfSv",
      0,
      500, //img page 7
    ],

    [
      "https://lh4.googleusercontent.com/nl7GCcecTk67VngPTIj21hZj6zPn9qlfT2zS49Vmo2MXFiddOexpIS8at_Eoi_1vloGzAcluVSC10oTXgtQV369ylieCRoqyEWXq5N0Hqi6OT7kkmYoiBq1t24uit1sf8f00nt_t",
      0,
      500, //img page 11
    ],
    [
      "https://lh3.googleusercontent.com/7NoXysSm4X0IhMi3kJagCOr3MQ8lEfkuL14YUnHUeXPlvMkOUSJzizStnKnypjJ_t4aO1KRhwx6qV6OgUZT7Ou6kKjXbNO3xtiCRSQzd6tVsazT40snf9ECK2OLT_gRLfa5WlhsC",
      523,
      406, //img page 12
    ],
  ];

  const intakeLoader = [
    [
      "https://lh6.googleusercontent.com/BQP8Xwn269xHRQk3_SpkqJ2XdoxfFXgq7kVAUd59-P4VvbsJ02ZIo9fJC7c7OgWlG_uO3SJo2s9folwjoA-RrRhShHDgjzk7XV5AG4TdwxK1B65rX_DBBaoCx2IPw_GBgQLALDb_",
      0,
      500, //img page 4
    ],
  ];

  const climber = [
    [
      "https://lh3.googleusercontent.com/tppka5xBDGeK1u0WZw-ap5IWwnMwF23B6p_JLb79waQYdCgynWNPbTt8FTsPwDoRHcQgDuTjfzQLRRajseJQam_U747b9aAO9YvsEfxdWX8lAQvltx4fFf8ilwufdEoWQHJZHCoT",
      0,
      500, //img page 8
    ],
    [
      "https://lh3.googleusercontent.com/knBAukWAIu2cGZgyQO1m7g4jb0jXeCnvDpv2GhPkqkQwl8D7phaDJPnQZYTbWQsHR_Dx5t6Ex1vUW-iI0bX0hOOjiG6YPBGTDHA3wmrqqysQ9hbH-YidQJCUFQdtVFxj0K1q1jpv",
      0,
      500,
    ],
  ];

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-white pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Robot Components</h3>
                <p className="text-xl text-gray-600">
                  Our robot's major mechanisms
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Drivetrain
                    </div>
                    <div className="text-gray-600">Robot movements</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <GiSteeringWheel />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Intake
                    </div>
                    <div className="text-gray-600">Collects note from the ground and against wall</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <GiKnifeFork />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Shooter
                    </div>
                    <div className="text-gray-600">
                      Shoots note into speaker
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <GiBowman />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 4
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(4);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Climber
                    </div>
                    <div className="text-gray-600">Climbs on the stage</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <GiMuscleUp />
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className=" max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative mt-15 flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Carousel images={driveTrain} />
                    <div className="pl-5 text-left mt-2 text-gray-600">
                      <p>
                        <ul
                          className="pl-5"
                          style={{ listStyleType: "circle" }}
                        >
                          <li>Swerve Drive</li>
                          <ul
                            className="pl-5"
                            style={{ listStyleType: "square" }}
                          >
                            <li>2 Krakens on each module</li>
                            <li>11:1 Gear ratio</li>
                          </ul>
                          <li>Open chassis design</li>
                          <ul
                            className="pl-5"
                            style={{ listStyleType: "square" }}
                          >
                            <li>
                              Allows us to intake without bringing over bumper
                            </li>
                          </ul>
                          <li>Six 6” HiGrip Wheels</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Carousel images={intakeLoader} />
                    <div className="pl-5 text-left mt-2 text-gray-600">
                      <p>
                        <ul
                          className="pl-5"
                          style={{ listStyleType: "circle" }}
                        >
                          <li>Motorized using neo motor</li>
                          <li>Loader hidden belt design</li>
                          <li>Compliance wheels powered by 2 775 motors</li>
                          <li>
                            2 rows of 2 inches compliance wheels on intake
                          </li>
                          <li>9:1 gear ratio for bottom loader</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Carousel images={turretShooter} />
                    <div className="pl-5 text-left mt-2 text-gray-600">
                      <p>
                        <ul
                          className="pl-5"
                          style={{ listStyleType: "circle" }}
                        >
                          <li>
                            Double flywheel design powered by 2 Falcon 500s
                          </li>
                          <li>
                            270º rotational turret powered by a Falcon 500
                          </li>
                          <li>
                            Limelight used for turret rotation and distance
                            calculation
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </Transition>
                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Carousel images={climber} />
                    <div className="pl-5 text-left mt-2 text-gray-600">
                      <p>
                        <ul
                          className="pl-5"
                          style={{ listStyleType: "circle" }}
                        >
                          <li>Greyt Elevator (West Coast) </li>
                          <ul
                            className="pl-5"
                            style={{ listStyleType: "square" }}
                          >
                            <li>
                              Run by chain and two falcon motors with 100:1 gear
                              ratio
                            </li>
                            <li>Two hooks on the side</li>
                          </ul>
                          <li>2 Arms</li>
                          <ul
                            className="pl-5"
                            style={{ listStyleType: "square" }}
                          >
                            <li>
                            Motorized using in house gearbox, neo motors, spark max motor controllers
                            </li>
                            <li>
                            Geared down to 400:1 for torque
                            </li>
                            <li>
                            Custom made hooks on CNC
                            </li>
                          </ul>
                        </ul>
                      </p>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RobotFeatures2024;
