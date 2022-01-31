import React from 'react';
import {motion} from 'framer-motion';
import Carousel from '../../utils/Carousel';


const images = [
    ["https://lh4.googleusercontent.com/u9NpegBeqavA-gFzNj4nbzFn7Yc9ojHUSAUZvf6_cB3oANKuo-oUT_2Xmu3J9XaQIuNDMdvHrBhpD_i58qSjnnZwBQtuObi-zYVjCFx-E2zMGvnTLKbvc_xNm9GCq3KVTrqr-MiG",  235, 312],
    ["https://cdn.mos.cms.futurecdn.net/6h8C6ygTdR2jyyUxkALwsc.jpg", 400, 400],
    ["https://media.istockphoto.com/photos/donkey-picture-id93216008?k=20&m=93216008&s=612x612&w=0&h=ufFslrWtjVYHgIVtV4UYUeO5x2dMOswZvwFSsK4RJU8=", 234, 234],
    ["https://upload.wikimedia.org/wikipedia/commons/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg",234,234],
]

const images2 = [
  ["https://lh4.googleusercontent.com/u9NpegBeqavA-gFzNj4nbzFn7Yc9ojHUSAUZvf6_cB3oANKuo-oUT_2Xmu3J9XaQIuNDMdvHrBhpD_i58qSjnnZwBQtuObi-zYVjCFx-E2zMGvnTLKbvc_xNm9GCq3KVTrqr-MiG",  235, 312],
  ["https://cdn.mos.cms.futurecdn.net/6h8C6ygTdR2jyyUxkALwsc.jpg", 400, 400],
  ["https://media.istockphoto.com/photos/donkey-picture-id93216008?k=20&m=93216008&s=612x612&w=0&h=ufFslrWtjVYHgIVtV4UYUeO5x2dMOswZvwFSsK4RJU8=", 234, 234],
  ["https://upload.wikimedia.org/wikipedia/commons/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg",234,234],
]

function Robot() {
  return (
  <main className="flex-grow">
      <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6"/>
          <div className="py-12 md:py-20">
          {/* Section header */}
          <motion.div initial ="hidden" animate ="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale:1,
              opacity:1,
              transition: {
                delay: .4
              }
            }
          }} className="max-w-3xl mx-auto text-center pb-12 md:pb-14">
              <h2 className="h2 mb-4">Our Robot</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              <p className="mb-3">The design and execution of our robot </p> 
              <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </p>
          </motion.div>
          {/* 2020 Robot */}
          <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              <p className="mb-3 mx-auto text-center">2020 Robot </p> 
          </p>
          <Carousel images={images} />
          {/* 2020 Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid">
              <p className="text-gray-800">
              {/* <h4 className="h4 mb-3">Header</h4> */}
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing

              </p>{" "}
              <br />
              <p className="text-gray-800">
              {/* <h4 className="h4 mb-3">Header</h4> */}
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing

              </p>{" "}
              <br />
              <p className="text-gray-800"/>
              </div>
              {/* <h4 className="h4 mb-3">Header</h4> */}
              {/* 2022 Robot */}
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              <p className="mb-3 mx-auto text-center">2022 Robot </p> 
              </p>
              <Carousel images = {images2}/>
          {/* 2022 Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid">
              <p className="text-gray-800">
              {/* <h4 className="h4 mb-3">Header</h4> */}
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing

              </p>{" "}
              <br />
              <p className="text-gray-800">
              {/* <h4 className="h4 mb-3">Header</h4> */}
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing
              Lorem ipsum dolor sit amet, consectetur adipiscing

              </p>{" "}
              <br />
              <p className="text-gray-800">
              </p>
          </div>
          
      </div>
      </section>
  </main>
  );
}


export default Robot;