import React, { useState } from "react";
import ReactPlayer from "react-player";

function Media() {
  return (
    <main >
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4">Media</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                A collection of media that represents our team
              </p>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="max-w-sm md:max-w-7xl mx-auto grid grid-cols-3 gap-4 ">
          <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
            <div className="hover:overflow-x-scroll">
            <ReactPlayer url="https://www.youtube.com/watch?v=YkSaKTfk0R4" />
            </div>
            <div className="text-center px-6 py-4 font-bold  text-xl mb-2">
              Robot
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              src="/static/images/2020robot.png"
              alt="L"
              className="w-full"
            />
            <div className="text-center px-6 py-4 font-bold  text-xl mb-2">
              Robot
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              src="/static/images/2020robot.png"
              alt="L"
              className="w-full"
            />
            <div className="text-center px-6 py-4 font-bold  text-xl mb-2">
              Robot
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              src="/static/images/2020robot.png"
              alt="L"
              className="w-full"
            />
            <div className="text-center px-6 py-4 font-bold  text-xl mb-2">
              Robot
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              src="/static/images/2020robot.png"
              alt="L"
              className="w-full"
            />
            <div className="text-center px-6 py-4 font-bold  text-xl mb-2">
              Robot
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              src="/static/images/2020robot.png"
              alt="L"
              className="w-full"
            />
            <div className="text-center px-6 py-4 font-bold  text-xl mb-2">
              Robot
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              src="/static/images/2020robot.png"
              alt="L"
              className="w-full"
            />
            <div className="text-center px-6 py-4 font-bold  text-xl mb-2">
              Robot
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              src="/static/images/7419TechSupport.png"
              alt="L"
              className="w-full"
            />
            <div className="text-center px-6 py-4 font-bold  text-xl mb-2">
              Robot
            </div>
            
            
          </div>
        </div>
      </section>
    </main>
  );
}

export default Media;