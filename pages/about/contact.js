import { useState } from "react";
import { useRouter } from "next/router";

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
                  className="block mb-5   text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  required
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                ></input>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block mb-5   text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone #(optional)"
                ></input>
                <input
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  className="block mb-5   text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  id="team"
                  name="team"
                  placeholder="Enter Team # (optional)"
                ></input>
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="block mb-5   text-gray-400 border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
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
                  <button className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Submit
                  </button>
                )}
                {ispending && (
                  <button className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded opacity-50 cursor-not-allowed">
                    Submitting
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
