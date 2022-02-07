import React from 'react';

class ContactUs extends React.Component {
  
    render() {
      return (
        <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-14">
              <h2 className="h2 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              </p>
            </div>
            {/* Items */}
            <div className="max-w-sm md:max-w-4xl mx-auto grid">
              <p className="text-gray-800 prose lg:prose-lg mx-auto mb-4">
                {/* <h4 className="h4 mb-3">Header</h4> */}
                Contact Us for questions? idk
              </p>
              <form>
                <input class="appearance-none block w-full text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" id="name" name="name" 
                placeholder="Enter Name" onfocus="this.placeholder=''" onblur="this.placeholder='Name'"size = "50"></input><br></br><br></br>
                <input class="appearance-none block w-full  text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"type="text" id="email" name="email" placeholder="Enter Email
                " onfocus="this.placeholder=''" onblur="this.placeholder='Email'"size = "50"></input><br></br><br></br>
                <input class="appearance-none block w-full  text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" id="message" name="message" 
                placeholder="Enter Message" onfocus="this.placeholder=''" 
                onblur="this.placeholder='Message'" size = "50"></input><br></br><br></br>
            
                
                <br></br>
                <div class="content-center">
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  Submit
                </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </main>
      );
    }
  }
  
  export default ContactUs;