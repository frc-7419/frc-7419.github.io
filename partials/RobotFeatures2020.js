import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.js";
import Carousel from "../utils/Carousel";
import {GiSteeringWheel, GiKnifeFork, GiBowman, GiMuscleUp} from "react-icons/gi";
function RobotFeatures2020() {
  const driveTrain = [
    [
      "https://lh3.googleusercontent.com/WLw1CltQ_heJ47s9EXv1mVtW3CxkD7O4SSedpiHLWzuKkVR2X0r0rnXAKlhrtIv46T-ALPNUaFq3iGyEm5wIBOCTTK335E9PBibSp2VpH6tE85vnzpVBCvG2RybIwDRFwDFUHw69",
      0,
      500,
    ],
    [
      "https://lh3.googleusercontent.com/oNKPmk9dPLC_ZPkFuPByhqE9l9EjGWgRmGNnZEA4RSXoxMRmdBliURgYmTzHstAe-omULqSiMEpj-Ux9qjHG3W5sX7Pz31ifRwxakV1LbKFC7_QJ2UPHdfzEs7liPrvaRH8NmtTi",
      0,
      500,
    ],
    [
      "https://lh4.googleusercontent.com/idROivrgd4f5xhwnKBm0JG2S5aSYC3O_inVJq20BSuO1EhwnhFT6xcUGVCbnQDIVx0sKYyPVOtiU_pncr66GEhCO-wzlaWTtHRF-F3t1IFMUUjEfbvMRnUJEJCd47JXuXBFFI_pp",
      0,
      500,
    ],
  ];

  const intake = [
    [
      "https://lh3.googleusercontent.com/mnKyvdfCGl5HFhuHTT1UeW0AzguNVLZDNYXJU92-IdSvJ30fHqBc2XO1hH9ZhUEDhQswvwgZFItUKSkP9mYL6qa6mUpLkerIZpFc8sWFN6Vphmguu5Cf-57-zjKQULjOIewZ21px",
      0,
      500, //img page 7
    ],

    [
      "https://lh6.googleusercontent.com/lrJkD6eWZInpH3IriQOeqf6gcRMil2BBY-xLDhY8r0x0UA2mep15U8wzu5lKHHacaSWohOym5PKX87_ZpkbM_lbd9HDcvYOjpK1xril7QRxKcnDDCnQTk5KOeF7-tj308XZF56z4",
      0,
      500, //img page 11
    ],
    [
      "https://lh6.googleusercontent.com/blRs_SZlNuJcq1PdsbDwfY8lPPTuh03Vi5TQuPH_lPW44vf8pEZYKsRy7pKmh0QM5IyO1aULK7QhlkEYzhH9SjHOmo9ZK5d6_vzbiIhlPla54YCvCh7K7_sCqYSM-bIe5WBlX0pZ",
      523,
      406, //img page 12
    ],
  ];

  const shooterLoader = [
    [
      "https://lh4.googleusercontent.com/b0Q5xcTlhv-pZo8rNVl9k1Xc7YDaQykz6ElQwHrXHufS2kR4zSv1M9sm38TvA0QTNS3wYjhfG8CqZKEsYdLrYzFNChav6HfHHiCg82fYtirSSpJwaTsABTMYB8Op-CYxWBlVNigP",
      0,
      500, //img page 4
    ],
    [
      "https://lh4.googleusercontent.com/fBsvRpHQrUWxrIew0e5f6Zn9sxmwBOJeKoc5KYZtEhLjctasp4Dl1ueimPk4lqfx6yHqwGEGTsCTtJAnPaFlZ4T2Guq-sDaSss8vzhiO8Ss1tuIIG5EvaVZ9Oz068ayCYvv3OaLK",
      0,
      500, //img page 5
    ],

    [
      "https://lh3.googleusercontent.com/v2EGst-53qsIjoHJiBMCgGMOYq8ihgtvPITSMV9OJArZ6ajgAcLf8C-Jnlg390_vKcU0HOtyPYBxhTBS_hHNtduSIo5kQnNXPJtHCIczT2IAUwMW8coUG7w_dHGCE82wcjpivQmE",
      0,
      500, //img page 6
    ],
    // [
    //   "https://lh5.googleusercontent.com/sfvjOFbFxoVXbWW-2fK4X-PbLpZnqD_u2NexV95nAqLd-KUZadkofPM8jeFLJBBjVfWtdDWsjknxLKnbN-D0ZwqyBh1mUUDMgqAiK5nwjT52gBRluu4TBFQrmRTuayE6M3xyaAcu",
    //   0,
    //   500, //img page 9
    // ],
  ];

  const climber = [
    [
      "https://lh4.googleusercontent.com/WjD2PMSe19rYhiNzrK9BDPmBBG0o8QQvXkY3EJ2ywq_zp7LQFv0-cHvpB5a2iFu-Yt3lJG1ra80oDNlO4nCAHTyZWYzLX3QPRfkliJybgPngsFqZU0akTgDJrc2aeZXW6HdNR3bB",
      0,
      500, //img page 8
    ],
    [
      "https://lh6.googleusercontent.com/KzNWP7zzz9TnNKJPXYA1aTXK9uLmdFonvMGrRmxCnq6UEZ8wx8zlOwfpueC6i_grW93Ca4dgbHVhuW11ivN15qfm0diMcgtgiRka7a29-MMbcWt18qpAAvn-8Rng5dQ66OTrNapk",
      0,
      500,
    ],
    [
      "https://lh5.googleusercontent.com/0baPQ5eZFmMNG0BD-ijwwb8TrL_ctR7Zc9FxFo6Z4a1srl4YGVAvokUpmQJho-zaCG4jMb3pbMw0Oxtf2FpqXY_-tdzooerVZo_0nuJJNRg_4ORigvowyscX0OkO1H7y2r0_LLwB",
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
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

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
                      Drive Train
                    </div>
                    <div className="text-gray-600">Moves robot</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <GiSteeringWheel/>
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
                    <div className="text-gray-600">Collects powercells</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <GiKnifeFork/>
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
                      Shooter/Loader
                    </div>
                    <div className="text-gray-600">
                      Shoots powercells out of the robot
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <GiBowman/>
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
                    <div className="text-gray-600">Climbs hangar</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <GiMuscleUp/>
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
                          <li>Drop center drive</li>
                          <li>Well rounded and quite fast</li>
                          <ul
                            className="pl-5"
                            style={{ listStyleType: "square" }}
                          >
                            <li>4 Falcon 500 Motors</li>
                            <li>11:1 Gear ratio</li>
                          </ul>
                          <li>Four 6” HiGrip Wheels</li>
                          <li>Two 6” Stealth Wheels</li>
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
                    <Carousel images={intake} />
                    <div className="pl-5 text-left mt-2 text-gray-600">
                      <p>
                        <ul
                          className="pl-5"
                          style={{ listStyleType: "circle" }}
                        >
                          <li>Wide rolling intake</li>
                          <ul
                            className="pl-5"
                            style={{ listStyleType: "square" }}
                          >
                            <li>Compliant wheels for human player station</li>
                          </ul>
                          <li>High friction grip tape on rollers</li>
                          <li>PVC rollers to ease movement</li>
                          <li>
                            Lexan sheet above to prevent balls from escaping
                          </li>
                          <li>90 degree gearbox to be compact</li>
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
                    <Carousel images={shooterLoader} />
                    <div className="pl-5 text-left mt-2 text-gray-600">
                      <p>
                        <ul
                          className="pl-5"
                          style={{ listStyleType: "circle" }}
                        >
                          <li>Flywheel design</li>
                          <ul
                            className="pl-5"
                            style={{ listStyleType: "square" }}
                          >
                            <li>Two 6” stealth wheels to shoot</li>
                            <li>Weight of 5 pounds</li>
                            <li>One 6” omni wheel to load</li>
                          </ul>
                          <li>Hood mechanism to direct shots</li>
                          <li>Powered by a Falcon 500 motor</li>
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
                          <li>Scissors Jack</li>
                          <ul
                            className="pl-5"
                            style={{ listStyleType: "square" }}
                          >
                            <li>Thin design</li>
                            <li>Only one motor per side</li>
                            <li>Easy to control</li>
                          </ul>
                          <li>Winch</li>
                          <ul
                            className="pl-5"
                            style={{ listStyleType: "square" }}
                          >
                            <li>Relatively thin design</li>
                            <li>Very strong</li>
                            <li>Separate mechanism to raise to bar</li>
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

export default RobotFeatures2020;
