import React from 'react';

import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Newsletter from '../partials/Newsletter';

function Home() {
  return (

      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />

        <FeaturesHome />
        <FeaturesBlocks />
        {/* <Newsletter /> */}

      </main>
  );
}

export default Home;