function Leadership() {
  const team = [
    {
      name: "Stephen Xie",
      position: "Programming",
      year: '24',
      img: "/static/images/Leadership/StephenXieHeadShot.jpg",
    },
    {
      name: "Karan Saini",
      position: "Programming",
      year: '22',
      img: "/static/images/Leadership/KaranSainiHeadshot.png",
    },
    {
      name: "Dhruv Bisla",
      position: "Mechanical",
      year: '24',
      img: "/static/images/Leadership/DhruvBislaHeadshot.png",
    },
    {
      name: "Charles Jin",
      position: "Programming",
      year: '23',
      img: "/static/images/Leadership/charlesJinheadshot.jpg",
    },
    {
      name: "Krithik Duvvuri",
      position: "Mechanical",
      year: '24',
      img: "/static/images/Leadership/KrithikDuvvuriHeadshot.jpg",
    },
    {
      name: "Brigitte Chung",
      position: "Non-technical",
      year: '22',
      img: "/static/images/Leadership/brigitte_headshot.png",
    },
    {
      name: "Aarav Sharma",
      position: "Programming",
      year: '23',
      img: "/static/images/Leadership/AaravSharmaHeadshot.jpg",
    },
    {
      name: "Aarav Wattal",
      position: "Programming",
      year: '23',
      img: "/static/images/Leadership/AaravWattalHeadshot.jpg",
    },
    {
      name: "Mimansa Kant",
      position: "Non-technical",
      year: '23',
      img: "/static/images/Leadership/Screenshot_20211025-173212_Gallery.jpg",
    },
    {
      name: "Modakar Kurma",
      position: "Mechanical",
      year: '24',
      img: "/static/images/Leadership/ModaKurmaHeadshot.jpg",
    },
    {
      name: "Rohan Kumar",
      position: "Mechanical",
      year: '22',
      img: "/static/images/Leadership/RohanKumarHeadshot.png",
    },
    {
      name: "Poluk Sharma",
      position: "Programming",
      year: '24',
      img: "/static/images/Leadership/Poluk)_Headshot.jpeg",
    },
    {
      name: "Ryan Biggee",
      position: "Mechanical",
      year: '25',
      img: "/static/images/Leadership/RyanB.jpg",
    },
    {
      name: "Sarp Gursel",
      position: "Mechanical",
      year: '23',
      img: "/static/images/Leadership/Sarp Gursel Headshot.JPG",
    },
    {
      name: "Sneha Gadekarla",
      position: "Programming",
      year: '24',
      img: "/static/images/Leadership/SnehaGadekarlaHeadshot.jpg",
    },
    {
      name: "Sudharsan Gopalakrishnan",
      position: "Programming",
      year: '23',
      img: "/static/images/Leadership/SudharsanGopalakrishnanHeadshot.png",
    },
    {
      name: "Mark Yang",
      position: "Mechanical",
      year: '22',
      img: "/static/images/Leadership/Mark.jpg",
    },
    {
      name: "Nancy Wu",
      position: "Mechanical",
      year: '23',
      img: "/static/images/Leadership/Nancy Wu Headshot.jpeg",
    },
    {
      name: "Vivi Cheng",
      position: "Non-technical",
      year: '23',
      img: "/static/images/Leadership/ViviChengHeadshot.jpg",
    },
  ];

  return (
    <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-14">
              <h2 className="h2">Our Student Leadership</h2>
              {/* <p className="text-xl text-gray-600" data-aos="zoom-y-out"></p> */}
            </div>

            {/* Items */}
            <div className="max-w-sm md:max-w-4xl mx-auto grid">
              <p className="text-gray-800">
                {/* Our FRC team has grown out of a small FTC program that has been
                with the FIRST community for many years - FTC 5214 - Tech
                Support. Due to graduating members, we experienced a “soft
                restart” in 2015, our team was left entirely with rookies who
                struggled to even turn the robot on. Since the 2015 season, our
                team has rebuilt itself, found new mentorship, and grown in size
                dramatically. We gained expertise by building community ties and
                relying on other FTC teams for advice, and expanded our program
                through our outreach events and forming bonds with new people.
                In 2018, we had a stellar season and were able to win the
                Northern California FTC Championship. We earned a spot at the
                Houston championship, and were especially happy that we were
                able to finish in the top fourth of all the teams that competed
                at Worlds. While participating at the Championship, we were
                exposed to two different environments: FRC and FTC. After
                returning from Houston, we had a team discussion and we decided
                that we would try to participate in FRC. We were able to
                convince our school’s administration to support us in our
                mission, we have recruited many new students, more technical
                mentors, and forged partnerships with local companies. We’re
                excited for our first FRC season and look forward to what the
                future will bring. */}
              </p>
            </div>
            <div className="my-5 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {team.map((member, index) => { // fix id
                  return (
                    <div key={index} className="flex space-x-6 "> 
                      <img
                        src={member.img}
                        className="h-16 object-cover w-16 rounded-xl bg-gray-800 border-none shadow-sm"
                        alt={member.name}
                      />
                      <div className="block text-lg">
                        <a
                          className="hover:text-gray-700"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="font-semibold break-normal">{member.name} '{member.year}</p>
                        </a>
                        <p className="mt-1 text-base inline text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-medium">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Leadership;
