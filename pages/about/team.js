function Team() {
  return (
    <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-14">
              <h2 className="h2">Our Story</h2>
              {/* <p className="text-xl text-gray-600" data-aos="zoom-y-out"></p> */}
            </div>

            {/* Items */}
            <div className="max-w-sm md:max-w-4xl mx-auto grid">
              <p className="text-gray-800">Our FRC team has grown out of a small FTC program that has been with the FIRST community for many years - FTC 5214 - Tech Support.  Due to graduating members, we experienced a “soft restart” in 2015, our team was left entirely with rookies who struggled to even turn the robot on. Since the 2015 season, our team has rebuilt itself, found new mentorship, and grown in size dramatically. We gained expertise by building community ties and relying on other FTC teams for advice, and expanded our program through our outreach events and forming bonds with new people. In 2018, we had a stellar season and were able to win the Northern California FTC Championship. We earned a spot at the Houston championship, and were especially happy that we were able to finish in the top fourth of all the teams that competed at Worlds. While participating at the Championship, we were exposed to two different environments: FRC and FTC. After returning from Houston, we had a team discussion and we decided that we would try to participate in FRC. We were able to convince our school’s administration to support us in our mission, we have recruited many new students, more technical mentors, and forged partnerships with local companies. We’re excited for our first FRC season and look forward to what the future will bring.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Team;