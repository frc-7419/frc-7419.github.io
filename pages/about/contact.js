import React from "react";

import { useState } from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [team, setTeam] = useState("");
  const [msg, setMsg] = useState("");
  const [ispending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { name, email, phone, team, msg };

    setIsPending(true);

    fetch(
      "https://sheet.best/api/sheets/22f4e307-da45-4fa8-880a-e84b25c39186",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    ).then(() => {
      console.log("form submitted:", form);
      setIsPending(false);
    });
  };

  return (
    <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-14">
              <h2 className="h2 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out"></p>
            </div>
            {/* Items */}
            <div className="max-w-sm md:max-w-4xl mx-auto grid">
              <p className="text-gray-800 prose lg:prose-lg mx-auto mb-4">
                {/* <h4 className="h4 mb-3">Header</h4> */}
                Contact Us for questions? idk
              </p>

              <form onSubmit={handleSubmit}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  required
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                ></input>
                <br></br>
                <br></br>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="  text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  required
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                ></input>
                <br></br>
                <br></br>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="  text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone #"
                ></input>
                <br></br>
                <br></br>
                <input
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  className="  text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  id="team"
                  name="team"
                  placeholder="Enter Team #"
                ></input>
                <br></br>
                <br></br>
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="  text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  name="your-message"
                  cols="40"
                  rows="10"
                  aria-required="true"
                  aria-invalid="false"
                  spellCheck="false"
                  required
                  placeholder="Your Message"
                ></textarea>

                <br></br>
                {!ispending && (
                  <button
                    className="flex justify
              -center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    Submit
                  </button>
                )}
                {ispending && (
                  <button className="flex justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded opacity-50 cursor-not-allowed">
                    Submitting
                  </button>
                )}
              </form>

              <div className=" absolute right-60 ">
                <iframe
                  className="mb-5"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.6521379950627!2d-121.8728146845589!3d37.72784232263103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808feec260437329%3A0x13b6be57f4b26820!2s6363%20Tassajara%20Rd%2C%20Dublin%2C%20CA%2094568!5e0!3m2!1sen!2sus!4v1646872787020!5m2!1sen!2sus"
                  width="300"
                  height="225"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="flex">
                  <p className="text-gray-600">
                    <a href="https://www.google.com/maps/place/6363+Tassajara+Rd,+Dublin,+CA+94568/@37.7278423,-121.8728147,17z/data=!3m1!4b1!4m5!3m4!1s0x808feec260437329:0x13b6be57f4b26820!8m2!3d37.7278381!4d-121.870626">
                      <GoLocation
                        className="absolute bottom-{-1} right-60 "
                        style={{ width: "50", height: "50" }}
                      />
                    </a>
                  </p>
                  <p className="text-gray-500 absolute bottom-{-1} right-60 mt-12">
                    6363 Tassajara Road
                  </p>

                  <p className="text-gray-600">
                    <AiOutlineMail
                      className="absolute bottom-{-1} right-1 "
                      style={{ width: "50", height: "50" }}
                    />
                    <br />
                  </p>
                  <p className="text-gray-500 absolute bottom-{-1} right-0 mt-10">
                    7419TechSupport@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
