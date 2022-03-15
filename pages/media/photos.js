import React, { useState, useEffect } from "react";
import Photo from "../../partials/Photo";
import Video from "../../partials/Video";
import LoadingScreen from "../../partials/LoadingScreen.js";
import SoftwareTesting from "../../public/static/links/media/SoftwareTesting";
import Madtown2021 from "../../public/static/links/media/Madtown2021";
import TeamBuilding2021 from "../../public/static/links/media/TeamBuilding2021";
function Photos() {
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfPhotosLoaded, setNumberOfPhotosLoaded] = useState(0);
  const softwareTesting = SoftwareTesting.SoftwareTesting;
  const madtown2021 = Madtown2021.Madtown2021;
  const teamBuilding2021 = TeamBuilding2021.TeamBuilding2021;
  const TotalPhotos = madtown2021.length + teamBuilding2021.length;
  useEffect(() => {
    console.log(numberOfPhotosLoaded);
    if (numberOfPhotosLoaded >= TotalPhotos) {
      setIsLoading(false);
    }
  }, [numberOfPhotosLoaded]);
  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h2 className="h2 mb-4">Photos</h2>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                  A collection of media that represents our team
                </p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 overflow-visible">
            {/* {SoftwareTestingPhotos.map((photo) => <Photo link={photo} caption="wow"/>)} */}
            {madtown2021.map((photo) => (
              <Photo
                link={photo}
                key={photo.id}
                capOn={true}
                modOn={true}
                caption="MadTown Tournament"
                onLoading={() =>
                  setNumberOfPhotosLoaded(numberOfPhotosLoaded + 1)
                }
              />
            ))}
            {teamBuilding2021.map((photo) => (
              <Photo
                link={photo}
                key={photo.id}
                capOn={true}
                modOn={true}
                caption="Team Building 2021"
                onLoading={() =>
                  setNumberOfPhotosLoaded(numberOfPhotosLoaded + 1)
                }
              />
            ))}
            
          </div>
        </section>
      </main>
    </>
  );
}

export default Photos;
