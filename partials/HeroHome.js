import React, { useState } from 'react';
import Modal from '../utils/Modal';
import  WindowDimensions  from '../utils/WindowDimensions';
function HeroHome() {
  const [offsetY, setOffsetY] = useState(0);
  const scrollMethod = () => setOffsetY(window.pageYOffset);
  const { width,height } = WindowDimensions();
  React.useEffect(() => { 
    window.addEventListener("scroll", scrollMethod);

    return () => window.removeEventListener("scroll", scrollMethod);
  }, []);
  
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      {width > 600 ? <div className="bg-black mx-auto w-full absolute mt-14 md:mt-20" style ={{ transform: `translateY(${offsetY *0.6}px)`}}> <img className="opacity-30 object-fill w-full " src='/static/images/TeamPhotos/kickoff.jpg' alt="Hero" /> </div> : <div className="bg-black mx-auto w-full absolute mt-14 md:mt-20" style ={{ transform: `translateY(${offsetY *0.6}px)`}}> <img className="opacity-30 object-fill w-full " src='/static/images/TeamPhotos/kickoff.jpg' alt="Hero" /> </div>}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md: bg-scroll">


      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          <div className="text-center pb-12 md:pb-16">
          
            <h1 className="text-5xl md:text-6xl text-white font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">FRC 7419 <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> {width > 600 ? <span> QLS Tech Support </span> : <span className="text-3xl"> QLS Tech Support</span>} </span></h1>

          </div>


          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto w-1/2 rounded-xl opacity-80" src='/static/images/2020Robot.png' width="768" height="432" alt="Hero" />
              </div>

            </div>

          </div>
          
        </div>

      </div>
      </div>
      
    </section>
  );
}

export default HeroHome;  