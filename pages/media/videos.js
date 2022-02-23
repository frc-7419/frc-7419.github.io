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
          <div className="max-w-sm md:max-w-7xl mx-auto grid grid-cols-2 gap-2 overflow-hidden">
             <div className="max-w-lg rounded shadow-lg">
             <iframe src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview" height="100%" 
     width="100%" allow="autoplay"></iframe>
             </div>
             <div className="max-w-sm rounded shadow-lg">
             <iframe src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview" width="672" height="378" allow="autoplay"></iframe>
             </div>
             <div className="max-w-sm rounded shadow-lg">
             <iframe src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview" width="672" height="378" allow="autoplay"></iframe>
             </div>
             <div className="max-w-sm rounded shadow-lg">
             <iframe src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview" width="672" height="378" allow="autoplay"></iframe>
             </div>
             <div className="max-w-sm rounded shadow-lg">
             <iframe src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview" width="672" height="378" allow="autoplay"></iframe>
             </div>
          </div> 

          
             
        </section>
      </main>

  );
}

export default Videos;