import Link from 'next/link';

function messageReceived() {
  return (
    <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-14">
              <h2 className="h2 mb-4">Message Received!</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                <p className="mb-3"></p>{" "}
                <p className="text-md">
                  Thank you for reaching out to us, we will get back to you
                  soon!{" "}
                </p>
              </p>
            </div>
            <div className="py-14 flex items-center justify-center">
              <Link href="/">
                <a>
                  <button className="btn text-white text-center font-bold bg-blue-500 hover:bg-blue-700 shadow">
                    Home
                  </button>
                </a>
              </Link>
              {/* <p className="text-center text-2xl underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><Link to="/">Home</Link></p> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default messageReceived;
