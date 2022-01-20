import React from 'react';



function Robot() {
    return (
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-14">
                <h2 className="h2 mb-4">Our Robot</h2>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                  <p className="mb-3">The design and execution of our robot </p> 
                  <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </p>
              </div>
              {/* 2020 Robot */}
              
              {/* Items */}
              <div className="max-w-sm md:max-w-4xl mx-auto grid">
                <p className="text-gray-800">
                  {/* <h4 className="h4 mb-3">Header</h4> */}
                  We’ve always been a part of the FIRST community, starting off as
                  a small FTC team and developing into the FRC team that made it
                  to the 2019 World Championship. Since the first group of members
                  graduated in 2015, we experienced a “soft restart” and rebuilt
                  our knowledge base with curious rookies. Since then, we’ve been
                  steadily gaining new members, mentors, and presence as a team
                  that promotes STEM education in our community. We gained
                  expertise by building friendships with other FTC teams and
                  expanded our program through our outreach events, even
                  recruiting new members. In 2018, we had a stellar season and
                  were able to win the Northern California FTC Championship. A
                  year later as an FRC rookie team, we earned a spot at the
                  Houston Championship and were especially happy that we were able
                  to finish in the top fourth of all the teams that competed at
                  Worlds.
                </p>{" "}
                <br />
                <p className="text-gray-800">
                  {/* <h4 className="h4 mb-3">Header</h4> */}
                  Celebrating our accomplishment was important, but the graduation
                  of core leadership was coming up and as we began to ponder this
                  problem for the next season, the pandemic hit. Our team stayed
                  as a tight-knight community, checking in with each other and
                  hosting meetings over Zoom to discuss events beyond building the
                  robot. We sent care letters to hospitals, trained members who
                  were interested in virtual skills like programming and CAD
                  software, and still did FRC dances to keep the spirit alive.
                </p>{" "}
                <br />
                <p className="text-gray-800">
                  {/* <h4 className="h4 mb-3">Header</h4> */}
                 
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  

export default Robot;
    