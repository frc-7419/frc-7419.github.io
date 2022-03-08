import React, { useState } from "react";
import ReactPlayer from "react-player";
function Videos() {
  return (
    <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4">Videos</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                A collection of media that represents our team
              </p>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="max-w-sm md:max-w-7xl mx-auto grid grid-cols-2 gap-2 overflow-x-scroll">
          <div className="max-w-lg rounded shadow-lg ">
            <iframe
              src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview"
              height="100%"
              width="100%"
              allow="autoplay"
            ></iframe>
          </div>
          <div
            className="embed-responsive embed-responsive-21by9 relative w-full overflow-x-scroll"
            style={{paddingTop: "42.857143%"}}
          >
            <iframe
              className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
              src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview"
              allowFullScreen=""
              data-gtm-yt-inspected-2340190_699="true"
              id="240632615"
            ></iframe>
          </div>
          <div className="max-w-sm rounded shadow-lg overflow-x-scroll">
            <iframe
              src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview"
              width="672"
              height="378"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="max-w-sm rounded shadow-lg overflow-x-scroll">
            <iframe
              src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview"
              width="672"
              height="378"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="max-w-sm rounded shadow-lg overflow-hidden hover:overflow-visible">
            <iframe
              src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview"
              width="672"
              height="378"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Videos;
