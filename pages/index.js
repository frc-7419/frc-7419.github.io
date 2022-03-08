import React from "react";

import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";

function Home() {
  return (
    <main className="flex-grow">
      {/*  Page sections */}
      <HeroHome />
      <FeaturesHome />
      <FeaturesBlocks />
    </main>
  );
}

export default Home;
