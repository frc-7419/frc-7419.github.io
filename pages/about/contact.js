import { useState } from 'react';
import { useRouter } from 'next/router'

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
    router.push('/');
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
              <form className="mx-auto" onSubmit={handleSubmit}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block  mx-auto mb-5 text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  required
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                ></input>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block  mx-auto mb-5   text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  required
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                ></input>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block  mx-auto mb-5   text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone #"
                ></input>
                <input
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  className="block  mx-auto mb-5   text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  type="text"
                  id="team"
                  name="team"
                  placeholder="Enter Team #"
                ></input>
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="block  mx-auto mb-5   text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"
                  name="your-message"
                  cols="40"
                  rows="10"
                  aria-required="true"
                  aria-invalid="false"
                  spellCheck="false"
                  required
                ></textarea>

                <br></br>
                {!ispending && (
                  <button className="block  mx-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Submit
                  </button>
                )}
                {ispending && (
                  <button className="block  mx-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded opacity-50 cursor-not-allowed">
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
