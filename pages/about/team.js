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
              <p className="text-gray-800">
                Our FRC team has grown out of a small FTC program that has been
                with the FIRST community for many years - FTC 5214 - Tech
                Support. Due to graduating members, we experienced a “soft
                restart” in 2015, as our team was left entirely with rookies who
                struggled to even turn the robot on. Since the 2015 season, our
                team has rebuilt itself, found new mentorship, and grown in size
                dramatically. We gained expertise by building community ties and
                relying on other FTC teams for advice, and expanded our program
                through our outreach events and forming bonds with new people.
                In 2018, we had a stellar season and were able to win the
                Northern California FTC Championship. We earned a spot at the
                Houston championship, and were especially happy that we were
                able to finish in the top fourth of all the teams that competed
                at Worlds. </p>
                <p className="text-gray-800">
                While participating at the Championship, we were exposed to two
                different environments: FRC and FTC. After returning from
                Houston, we had a team discussion and we decided that we would
                try to participate in FRC. We were able to convince our school’s
                administration to support us in our mission, allowing us to
                recruit many new students, more technical mentors, and forge
                partnerships with local companies. We officially established our
                7419 FRC team in 2019, but were hit by Covid-19 and the many
                obstacles it brought. </p>
                <p className="text-gray-800">
                While the pandemic created many challenges of its own, it did
                offer us the unique opportunity to rethink the organization,
                systems, and structure of our team. Since then, our team has
                shifted to becoming almost entirely student-run, seeking to
                reinstate an effective and lasting framework — one that will not
                be affected by graduating members or by the growth of the team
                through an influx of new members. With knowledge from our past
                experiences, we are ready and excited for what the 2021-2022
                season will bring us.</p>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;
