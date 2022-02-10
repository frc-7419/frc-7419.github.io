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

      {/* src='/static/images/7419TechSupport.jpg' */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">


        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/*   ion header */}
          <div className="text-center pb-12 md:pb-16">
          
            <h1 className="text-5xl md:text-6xl text-white font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">FRC 7419 <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> {width > 600 ? <span> Tech Support </span> : <span>Tech<br/> Support</span>} </span></h1>
            {/* <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">The official website for FRC Team 7419</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div>
            </div> */}
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto w-1/2 rounded-xl opacity-80" src='/static/images/2020Robot.png' width="768" height="432" alt="Hero" />
              </div>
              {/* <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button> */}
            </div>

            {/* Modal */}
            {/* <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal> */}

          </div>
          
        </div>

      </div>
      </div>
      
    </section>
  );
}

export default HeroHome;  