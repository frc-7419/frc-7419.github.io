import React from 'react';

function Outreach() {
  return (

      <main className="flex-grow">
        <section className="relative">

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
            <div className="py-12 md:py-20">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h2 className="h2 mb-4">Team Impact and Outreach</h2>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out">We inspire excitement for STEM and FIRST in our own community, and to help make FIRST programs successful and accessible to others.</p>
              </div>

              {/* Items */}
              <div className="max-w-sm md:max-w-4xl mx-auto grid">
                <p className="text-gray-600 mb-4">A significant part of the FIRST experience heavily revolves around outreach. Outreach not only emphasizes the impact and benefits of robotics but also inspires people of all ages to pursue an interest in STEM. In our team, every student makes a commitment to participate in outreach, with our activities spanning from assisting FLL and FTC teams to holding workshops at after school programs like Genius Kids. Here are just a few examples of outreach events we’ve held:</p>
                <ul>
                  <li className="mb-3">
                    <h4 className="h4 mb-3">2021 Kindness Week</h4>
                    <p className="text-gray-600 mb-4">During this week, we donated to shelters, sent letters to healthcare workers, and 3D printed toys. As a team that is part of the FRC community, we not only learn about STEM, but also recognize how crucial it is to help others and give back to those who made sacrifices during the pandemic to assist the sick.</p>
                    <div className='grid grid-cols-1'>
                      <img className="rounded mb-4 mx-auto max-w-sm md:max-w-md xl:max-w-xl" src="/static/images/outreach/2021_kindness_week/letters.jpg" alt="Letters" />
                      <img className="rounded mb-4 mx-auto max-w-sm md:max-w-md xl:max-w-xl" src="/static/images/outreach/2021_kindness_week/toilet_paper.png" alt="Toilet Paper" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4 className="h4 mb-3">First Lego League and First Tech Challenge</h4> 
                      <p className="text-gray-600 mb-4">Along with our high school FRC team we also have a FTC middle school team. To help guide the middle schoolers, we regularly mentor their progress and provide valuable instruction based on prior experience. We provide any type of assistance we can offer, from teaching them essential skills such as CAD or programming, to utilizing the 3D printer, laser cutter, and CNC mill.</p>
                      <p className="text-gray-600 mb-4">Along with mentoring, we have hosted 2 tournaments in the past in order to give more teams an opportunity to compete, as well as to help strengthen FIRST’s presence in the tri-valley area. We hosted and ran both an FLL and an FTC tournament, with many of 7419 members helping during planning, organization, and volunteering at the event. </p>
                      <img className="my-4 rounded max-w-sm md:max-w-md lg:max-w-lg" src="/static/images/outreach/fll.jpg" alt="FLL Tournament" />
                    </div>
                  </li>  
                  <li>
                    <div>
                      <h4 className="h4 mb-3">Genius Kids</h4>
                      <ul>
                        <li className="mb-3">
                          <p className="text-gray-600">It is an after-school enrichment program to present scientific and engineering concepts to young children in a captivating manner to open their eyes to the possibilities right at their fingertips! Our hope is that they are not only left with a little more technological intuition than an hour ago but are curious about the ingenious culture of FIRST robotics that our members come from. Our hope is that they are not only left with a little more technological intuition than an hour ago but are curious about the ingenious culture of FIRST robotics that our members come from.</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </main>

  );
}

export default Outreach;