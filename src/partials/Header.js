import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../utils/Dropdown';

function Header() {

  const [top, setTop] = useState(true);
  const [navbarOpen, setNavbarOpen] = useState(false);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white ${!top && 'bg-white blur shadow-lg'}`}>
      <nav className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between py-2 md:py-4">

          {/* Site branding */}
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">

          {/* <div className="w-full flex-grow flex-row justify-between md:w-auto mr-4"> !!!!!! mr-4 */}
            {/* Logo */}
            <Link to="/" className="block" aria-label="Tech Support">
              <img src={require('../images/logos/7419_light.png').default} width='40px' alt="7419 Logo" />
            </Link>
            <button onClick={() => setNavbarOpen(!navbarOpen)} className="focus:outline-none leading-none md:hidden" aria-label="Navbar Toggle">
              <svg className="text-gray-800 hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          </div>

          {/* Site navigation */}
          <div
            className={
              "md:flex flex-grow items-center transition-opacity" +
              (navbarOpen ? " flex" : " hidden") // TODO: make this transition
            }
          >
          
            <ul className="flex flex-grow flex-col md:flex-row md:justify-end flex-wrap items-center">
              <li>
                <Link to="/" className="font-medium text-gray-600 hover:text-gray-800 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  Home
                </Link>
              </li>
              {/* <li> */}
                <Dropdown title="About">
                  <Link to="/about/team" className="font-medium text-gray-600 hover:text-gray-800 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    The Team
                  </Link>
                  <Link to="/about/mentors" className="font-medium text-gray-600 hover:text-gray-800 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Mentors
                  </Link>
                  <Link to="/about/sponsors" className="font-medium text-gray-600 hover:text-gray-800 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Sponsors
                  </Link>
                </Dropdown>
              {/* </li> */}
              <li>
                <Link to="/blog" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Team Blog</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>
              </li>
            </ul>

          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
