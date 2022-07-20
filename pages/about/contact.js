import { useState } from "react";
import { useRouter } from "next/router";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [team, setTeam] = useState("");
  const [msg, setMsg] = useState("");
  const [ispending, setIsPending] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    const time = Date().toLocaleString();
    const form = { time, name, email, phone, team, msg };
    setIsPending(true);

    fetch(
      "https://formspree.io/f/xyyorjnj",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    ).then(() => {
      console.log("form submitted:", form);
      setIsPending(false);
    });
    router.push("/about/messageReceived");
    setName("");
    setEmail("");
    setPhone("");
    setTeam("");
    setMsg("");
  };

  return (
    <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
              <h2 className="h2 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                Contact us for any questions!
              </p>
            </div>
            {/* Items */}
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block mb-5 text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  required
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                ></input>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block mb-5 text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  required
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                ></input>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block mb-5 text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone #(optional)"
                ></input>
                <input
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  className="block mb-5 text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  id="team"
                  name="team"
                  placeholder="Enter Team # (optional)"
                ></input>
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="block mb-5 text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  name="your-message"
                  cols="40"
                  rows="10"
                  aria-required="true"
                  aria-invalid="false"
                  spellCheck="false"
                  placeholder="Enter Message"
                  required
                ></textarea>

                <br></br>
                {!ispending && (
                  <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Submit
                  </button>
                )}
                {ispending && (
                  <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded opacity-50 cursor-not-allowed">
                    Submitting
                  </button>
                )}
              </form>
            </div>
            <div className=" absolute right-60 top-60">
              <iframe
                className="mb-5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.6521379950627!2d-121.8728146845589!3d37.72784232263103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808feec260437329%3A0x13b6be57f4b26820!2s6363%20Tassajara%20Rd%2C%20Dublin%2C%20CA%2094568!5e0!3m2!1sen!2sus!4v1646872787020!5m2!1sen!2sus"
                width="300"
                height="225"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <GrMapLocation className="w-8 h-8 mr-2" />
                  <a
                    className="text-gray-500 underline"
                    href="https://www.google.com/maps/place/6363+Tassajara+Rd,+Dublin,+CA+94568/@37.7278423,-121.8728147,17z/data=!3m1!4b1!4m5!3m4!1s0x808feec260437329:0x13b6be57f4b26820!8m2!3d37.7278381!4d-121.870626"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    6363 Tassajara Rd, Dublin, CA 94568
                  </a>
                </div>
                <div className="flex flex-row items-center">
                  <AiOutlineMail className="w-8 h-8 mr-2" />
                  <a className="text-gray-500 underline" href="mailto:support@7419.tech">support@7419.tech</a>
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
