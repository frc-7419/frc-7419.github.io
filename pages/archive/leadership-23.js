function Leadership() {
    const team = [
      {
        name: "Stephen Xie",
        position: "Programming",
        year: "24",
        img: "/static/images/Leadership/StephenXieHeadShot.jpg",
      },
      {
        name: "Dhruv Bisla",
        position: "Mechanical",
        year: "24",
        img: "/static/images/Leadership/DhruvBislaHeadshot.png",
      },
      {
        name: "Krithik Duvvuri",
        position: "Mechanical",
        year: "24",
        img: "/static/images/Leadership/KrithikDuvvuriHeadshot.jpg",
      },
      {
        name: "Aarav Sharma",
        position: "Programming",
        year: "23",
        img: "/static/images/Leadership/SharmaNew.jpg",
      },
      {
        name: "Aarav Wattal",
        position: "Programming",
        year: "23",
        img: "/static/images/Leadership/AaravWattalHeadshot.jpg",
      },
      {
        name: "Modakar Kurma",
        position: "Mechanical",
        year: "23",
        img: "/static/images/Leadership/ModaKurmaHeadshot.jpg",
      },
      {
        name: "Poluk Sharma",
        position: "Programming",
        year: "24",
        img: "/static/images/Leadership/Poluk)_Headshot.jpeg",
      },
      {
        name: "Ryan Biggee",
        position: "Mechanical",
        year: "25",
        img: "/static/images/Leadership/RyanB.jpg",
      },
      {
        name: "Sarp Gursel",
        position: "Mechanical",
        year: "23",
        img: "/static/images/Leadership/Sarp Gursel Headshot.JPG",
      },
      {
        name: "Sneha Gadekarla",
        position: "Programming",
        year: "24",
        img: "/static/images/Leadership/SnehaGadekarlaHeadshot.jpg",
      },
      {
        name: "Sudharsan Gopalakrishnan",
        position: "Programming",
        year: "23",
        img: "/static/images/Leadership/SudharsanGopalakrishnanHeadshot.png",
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
                <p className="text-lg text-gray-600 mt-10" data-aos="zoom-y-out">
                  True to the FIRST® mission of sparking invention and creativity,
                  team operations are entirely student-led. We have three main
                  departments: Mechanical, Programming, and Non-Technical. In each
                  of these sub-teams, leadership positions are earned through
                  continuous effort and dedication. We take pride in our team’s
                  culture that helps our leaders further explore their own skills
                  and passions and find joy in helping others.
                </p>
              </div>
  
              {/* Items */}
              <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {team.map((member, index) => {
                    // fix id
                    return (
                      <div
                        key={index}
                        className="flex space-x-6"
                        style={{ marginLeft: "25%" }}
                      >
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
                            <p className="font-semibold break-normal">
                              {member.name} '{member.year}
                            </p>
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
  