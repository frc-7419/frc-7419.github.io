import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

/* 404 Page */

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

        <Header />
        <section className="relative">
          <main className="flex-grow">

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
          <div className="pt-12 md:pt-20">
            <div className="pt-12 text-center">
              <h2 className="h2 text-gray-700">404: Page not Found</h2>
            </div>
          </div>
          <div className="py-14 flex items-center justify-center">
            <Link to="/"><button className="btn text-white text-center font-bold bg-blue-500 hover:bg-blue-700 shadow">Home</button></Link>
            {/* <p className="text-center text-2xl underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><Link to="/">Home</Link></p> */}
          </div>
          
        </div>
        </main>
      </section>
    </div>
  );
}

export default NotFound;