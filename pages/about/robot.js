import React from 'react';

import Carousel from '../../utils/Carousel';

const images = [
  ["https://lh4.googleusercontent.com/u9NpegBeqavA-gFzNj4nbzFn7Yc9ojHUSAUZvf6_cB3oANKuo-oUT_2Xmu3J9XaQIuNDMdvHrBhpD_i58qSjnnZwBQtuObi-zYVjCFx-E2zMGvnTLKbvc_xNm9GCq3KVTrqr-MiG", 235, 312],
  ["https://cdn.mos.cms.futurecdn.net/6h8C6ygTdR2jyyUxkALwsc.jpg", 400, 400],
  ["https://media.istockphoto.com/photos/donkey-picture-id93216008?k=20&m=93216008&s=612x612&w=0&h=ufFslrWtjVYHgIVtV4UYUeO5x2dMOswZvwFSsK4RJU8=", 234, 234],
  ["https://upload.wikimedia.org/wikipedia/commons/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg", 234, 234],
]

const images2 = [
  ["https://lh4.googleusercontent.com/u9NpegBeqavA-gFzNj4nbzFn7Yc9ojHUSAUZvf6_cB3oANKuo-oUT_2Xmu3J9XaQIuNDMdvHrBhpD_i58qSjnnZwBQtuObi-zYVjCFx-E2zMGvnTLKbvc_xNm9GCq3KVTrqr-MiG", 235, 312],
  ["https://cdn.mos.cms.futurecdn.net/6h8C6ygTdR2jyyUxkALwsc.jpg", 400, 400],
  ["https://media.istockphoto.com/photos/donkey-picture-id93216008?k=20&m=93216008&s=612x612&w=0&h=ufFslrWtjVYHgIVtV4UYUeO5x2dMOswZvwFSsK4RJU8=", 234, 234],
  ["https://upload.wikimedia.org/wikipedia/commons/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg", 234, 234],
]

function Robot() {
  return (
    <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6" />
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center pb-12 md:pb-14" data-aos="zoom-y-out">
            <h2 className="h2 mb-4">Our Robot</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              <p className="mb-3">The design and execution of our robot </p>
              <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </p>
          </div>
          {/* 2020 Robot */}
          <p className="text-xl text-gray-600" data-aos="zoom-y-out">
            <p className="mb-3 mx-auto text-center">2020 Robot </p>
          </p>
          <Carousel images={images} />
          {/* 2020 Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid">
            <p className="text-gray-800">
              {/* <h4 className="h4 mb-3">Header</h4> */}
              <div>
                <p>Hardware:</p>
                <ul className="pl-5" style={{listStyleType: "square"}}>
                  <li>Drive Train</li>
                  <ul className="pl-5" style={{listStyleType: "square"}}>
                    <li>Drop center drive</li>
                    <li>Well rounded and quite fast</li>
                    <ul className="pl-5" style={{listStyleType: "square"}}>
                      <li>4 Falcon 500 Motors</li>
                      <li>11:1 Gear ratio</li>
                    </ul>
                    <li>Four 6” HiGrip Wheels</li>
                    <li>Two 6” Stealth Wheels</li>
                  </ul>
                  <li>Intake</li>
                  <ul className="pl-5" style={{listStyleType: "square"}}>
                    <li>Wide rolling intake</li>
                    <ul className="pl-5" style={{listStyleType: "square"}}>
                      <li>Compliant wheels for human player station</li>
                    </ul>
                    <li>High friction grip tape on rollers</li>
                    <li>PVC rollers to ease movement</li>
                    <li>Lexan sheet above to prevent balls from escaping</li>
                    <li>90 degree gearbox to be compact</li>
                  </ul>
                  <li>Shooter/Loader</li>
                  <ul className="pl-5" style={{listStyleType: "square"}}>
                    <li>Flywheel design</li>
                    <ul className="pl-5" style={{listStyleType: "square"}}>
                      <li>Two 6” stealth wheels to shoot</li>
                      <li>Weight of 5 pounds</li>
                      <li>One 6” omni wheel to load</li>
                    </ul>
                    <li>Hood mechanism to direct shots</li>
                    <li>Powered by a Falcon 500 motor</li>
                  </ul>
                  <li>Climber</li>
                  <ul className="pl-5" style={{listStyleType: "square"}}>
                    <li>Scissors Jack</li>
                    <ul className="pl-5" style={{listStyleType: "square"}}>
                      <li>Thin design</li>
                      <li>Only one motor per side</li>
                      <li>Easy to control</li>
                    </ul>
                    <li>Winch</li>
                    <ul className="pl-5" style={{listStyleType: "square"}}> 
                      <li>Relatively thin design</li>
                      <li>Very strong</li>
                      <li>Separate mechanism to raise to bar</li>
                    </ul>
                  </ul>
                </ul>
              </div>
            </p>{" "}
            <br />
            <p className="text-gray-800">
              {/* <h4 className="h4 mb-3">Header</h4> */}
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing

            </p>{" "}
            <br />
            <p className="text-gray-800" />
          </div>
          {/* <h4 className="h4 mb-3">Header</h4> */}
          {/* 2022 Robot */}
          <p className="text-xl text-gray-600" data-aos="zoom-y-out">
            <p className="mb-3 mx-auto text-center">2022 Robot </p>
          </p>
          <Carousel images={images2} />
          {/* 2022 Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid">
            <p className="text-gray-800">
              {/* <h4 className="h4 mb-3">Header</h4> */}
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing

            </p>{" "}
            <br />
            <p className="text-gray-800">
              {/* <h4 className="h4 mb-3">Header</h4> */}
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing

            </p>{" "}
            <br />
            <p className="text-gray-800">
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}


export default Robot;
