import React from 'react';

  function Outreach() {
  return (

      <main className="flex-grow">
        <section className="relative">

        {/* Illustration behind content */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
          <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
              <circle cx="1630" cy="128" r="128" />
              <circle cx="178" cy="481" r="40" />
            </g>
          </svg>
        </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h2 className="h2 mb-4">Media</h2>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out">A collection of media that represents our team</p>
              </div>
              </div>
              </div>

              {/* Items */}
          <div class="max-w-sm md:max-w-7xl mx-auto grid grid-cols-3 gap-4">
             <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="/static/images/2020robot.png" alt="L" className="w-full"/>
                  <div className="text-center px-6 py-4 font-bold  text-xl mb-2">Robot</div>
             </div>
             <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="/static/images/2020robot.png" alt="L" className="w-full"/>
                  <div className="text-center px-6 py-4 font-bold  text-xl mb-2">Robot</div>
             </div> 
             <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="/static/images/2020robot.png" alt="L" className="w-full"/>
                  <div className="text-center px-6 py-4 font-bold  text-xl mb-2">Robot</div>
             </div> 
             <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="/static/images/2020robot.png" alt="L" className="w-full"/>
                  <div className="text-center px-6 py-4 font-bold  text-xl mb-2">Robot</div>
             </div> 
             <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="/static/images/2020robot.png" alt="L" className="w-full"/>
                  <div className="text-center px-6 py-4 font-bold  text-xl mb-2">Robot</div>
             </div> 
             <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="/static/images/2020robot.png" alt="L" className="w-full"/>
                  <div className="text-center px-6 py-4 font-bold  text-xl mb-2">Robot</div>
             </div> 
             <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="/static/images/2020robot.png" alt="L" className="w-full"/>
                  <div className="text-center px-6 py-4 font-bold  text-xl mb-2">Robot</div>
             </div>
             <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="/static/images/2020robot.png" alt="L" className="w-full"/>
                  <div className="text-center px-6 py-4 font-bold  text-xl mb-2">Robot</div>
             </div>  
          </div> 

          
             
        </section>
      </main>

  );
}

export default Outreach;