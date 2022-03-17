import React from "react";

function Sponsors() {
  return (
    <main className="flex-grow">
      <section className="relative">
        {/* Illustration behind content */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
          aria-hidden="true"
        >
          <svg
            width="1760"
            height="518"
            viewBox="0 0 1760 518"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-02"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g
              transform="translate(0 -3)"
              fill="url(#illustration-02)"
              fillRule="evenodd"
            >
              <circle cx="1630" cy="128" r="128" />
              <circle cx="178" cy="481" r="40" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4">Our Sponsors</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                Thank you for all your help along the way.
              </p>
            </div>

            {/* Items */}
            <div className="max-w-sm md:max-w-4xl mx-auto grid gap-x-3 grid-cols-4 md:grid-cols-4 px-20">
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img src={"/static/images/sponsors/qls.png"} alt="qls.png" />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/apple-logo.png"}
                  alt="apple-logo.png"
                />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/Brin-Wojcicki-logo.jpg"}
                  alt="Brin-Wojcicki-logo.jpg"
                />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/FIRSTlogo.jpg"}
                  alt="FIRSTlogo.jpg"
                />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/googleLogo.png"}
                  alt="googleLogo.png"
                />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/limelight.jpg"}
                  alt="limelight.jpg"
                />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img src={"/static/images/sponsors/nasa.png"} alt="nasa.png" />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/notion-logo.png"}
                  alt="notion-logo.png"
                />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/solidworks.png"}
                  alt="solidworks.png"
                />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/steel.jpeg"}
                  alt="steel.jpeg"
                />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img src={"/static/images/sponsors/TECO.png"} alt="TECO.png" />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/TapPlastics.png"}
                  alt="TapPlastics.png"
                />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/TheVillageOfDreams.png"}
                  alt="TheVillageOfDreams.png"
                />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/HansLaser.png"}
                  alt="HansLaser.png"
                />
              </div>
              <div className="sponsor flex items-center justify-center py-2 col-span-2 md:col-auto">
                <img
                  src={"/static/images/sponsors/IntuitiveFoundation.png"}
                  alt="IntuitiveFoundation.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sponsors;
