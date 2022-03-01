import React, { useState } from "react";
import Photo from "../../partials/Photo";
import ReactPlayer from "react-player";
import SoftwareTesting from "../../public/static/links/media/SoftwareTesting";
import Madtown2021 from "../../public/static/links/media/Madtown2021";
function Photos() {
  const SoftwareTestingPhotos = SoftwareTesting.SoftwareTesting;
  const Madtown2021Photos = Madtown2021.Madtown2021;
  return (
    <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4">Photos</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                A collection of media that represents our team
              </p>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="max-w-sm md:max-w-7xl mx-auto grid grid-cols-3 gap-4 overflow-visible">
          <Photo
            link="https://drive.google.com/uc?id=1Vo7nFYwTWajHXoYMPRXdfYE_hkrZjnyt&export=download"
            caption="wow"
          />
          <Photo link="/static/images/2020robot.png" caption="Robot" />
          {/* {SoftwareTestingPhotos.map((photo) => <Photo link={photo} caption="wow"/>)} */}
          {Madtown2021Photos.map((photo) => <Photo link={photo} caption="madtown wow"/>)}
        </div>
      </section>
    </main>
  );
}

export default Photos;
