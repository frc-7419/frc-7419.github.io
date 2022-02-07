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
                <input class=" text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"  type="text" id="name" name="name" 
                placeholder="Enter Name" onfocus="this.placeholder=''" onblur="this.placeholder='Name'"></input><br></br><br></br>
                <input class="  text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg" type="text" id="email" name="email" placeholder="Enter Email
                " onfocus="this.placeholder=''" onblur="this.placeholder='Email'" ></input><br></br><br></br>
                <input class="  text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"  type="text" id="phone" name="phone" 
                placeholder="Enter Phone #" onfocus="this.placeholder=''" 
                onblur="this.placeholder='Phone #'" ></input><br></br><br></br>
                <input class="  text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg"  type="text" id="team" name="team" 
                placeholder="Enter Team #" onfocus="this.placeholder=''" 
                onblur="this.placeholder='Message'" ></input><br></br><br></br>
                <textarea class="  text-gray-400 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white drop-shadow-lg" name="your-message" cols="40" rows="10"  aria-required="true" aria-invalid="false" spellcheck="false" placeholder="Enter Message"></textarea>
            
                
                <br></br>
                <button class="flex justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  Submit
                </button>
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