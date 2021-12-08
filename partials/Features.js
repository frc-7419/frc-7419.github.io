import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  // const heightFix = () => {
  //   if (tabs.current.children[tab]) {
  //     tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
  //   }
  // }

  useEffect(() => {
    // heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-white pointer-events-none mb-16 py-20" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          </div>
        </div>
    </section >
  );
}

export default Features;
