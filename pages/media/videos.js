import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import GoodRobot2020 from "../../public/static/images/GoodRobot2020.js";
import Video from "../../partials/Video";
import SoftwareTesting from "../../public/static/links/media/SoftwareTesting";
import FeaturedVids from "../../public/static/links/media/FeaturedVids";
import LoadingScreen from "../../partials/LoadingScreen.js";
function Videos() {
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfVideosLoaded, setNumberOfVideosLoaded] = useState(0);
  const softwareTesting = SoftwareTesting.SoftwareTesting;
  const featuredVids = FeaturedVids.FeaturedVids;
  const TotalVideos = softwareTesting.length + featuredVids.length;

  useEffect(() => {
    console.log(numberOfVideosLoaded);
    if (numberOfVideosLoaded >= TotalVideos) {
      setIsLoading(false);
    }
  }, [numberOfVideosLoaded]);
  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center md:pb-16">
                <h2 className="h2 mb-4">Videos</h2>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                  A collection of media that represents our team
                </p>
              </div>
            </div>
          </div>

          {/* Items */}

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h3 className="h3 mb-4">Software Testing</h3>
           </div>
            <div className="max-w-sm md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {softwareTesting.map((video) => (
              <Video
                key={video.toString()}
                link={video}
                onLoading={() =>
                  setNumberOfVideosLoaded(numberOfVideosLoaded + 1)
                }
              />
            ))}
            </div>
            <div className="max-w-3xl mx-auto text-center py-12 md:pb-16">
              <h3 className="h3 mb-4">Featured Videos</h3>
           </div>
            <div className="max-w-sm md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {featuredVids.map((video) => (
              <Video
                key={video.toString()}
                link={video}
                onLoading={() =>
                  setNumberOfVideosLoaded(numberOfVideosLoaded + 1)
                }
              />
            ))}
            <Video
              link="https://www.youtube.com/embed/dQw4w9WgXcQ"
              onLoading={() =>
                setNumberOfVideosLoaded(numberOfVideosLoaded + 1)
              }
            />
            {/* <div className="videoWrapper max-w-lg rounded shadow-lg ">
            <iframe
              src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview"
              height="100%"
              width="100%"
              allow="autoplay"
              allowFullScreen={true}
            ></iframe>
          </div> */}
          </div>
        </section>
      </main>
    </>
  );
}

export default Videos;
