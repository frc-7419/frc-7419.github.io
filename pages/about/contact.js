import React from 'react';

class ContactUs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
      alert('submitted' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <main className="flex-grow content-center">
        <section className="relative">
        <div className="text-xl text-gray-600" data-aos="zoom-y-out container">
            <form classname ="mx-auto"action ="">
                <label for="name" className="text-xl text-gray-600" data-aos="zoom-y-out container">
                    Enter Name
                </label>
                <label for="name" className="text-xl text-gray-600" data-aos="zoom-y-out container">
                    Enter Email
                </label>
                <label for="name" className="text-xl text-gray-600" data-aos="zoom-y-out container">
                    Enter Message
                </label>
                
            </form>
        </div>
        </section>
        </main> 
      );
    }
  }
  
  export default ContactUs;