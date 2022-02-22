import React, { useState } from 'react';
import ReactPlayer from 'react-player'
  function Videos() {
  
  
  
  return (
    <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h2 className="h2 mb-4">Videos</h2>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out">A collection of media that represents our team</p>
              </div>
              </div>
              </div>

              {/* Items */}
          <div className="max-w-sm md:max-w-7xl mx-auto grid grid-cols-3 gap-4 overflow-visible">
             <div className="max-w-sm rounded shadow-lg">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
             </div>
             
          </div> 

          
             
        </section>
      </main>

  );
}

export default Videos;