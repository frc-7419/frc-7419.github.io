import React from 'react';



    
class ImageSlider extends Component {

    state = {
        image: [
            "https://cdn.britannica.com/68/143568-050-5246474F/Donkey.jpg",
            "https://cdn.mos.cms.futurecdn.net/6h8C6ygTdR2jyyUxkALwsc.jpg",
            "https://media.istockphoto.com/photos/donkey-picture-id93216008?k=20&m=93216008&s=612x612&w=0&h=ufFslrWtjVYHgIVtV4UYUeO5x2dMOswZvwFSsK4RJU8=",
            "https://upload.wikimedia.org/wikipedia/commons/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg"
        ],
        idx: 0
    };

    next = () => {
      console.log (this.state);
      this.setState({
        idx: this.state.idx +1
      });
    };
    previous = () => {
      console.log (this.state);
      this.setState({
        idx: this.state.idx -1
      });
    };
    render() {
      return (
        <div>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
           onClick={this.previous}>{'<'}</button>
          <img alt=""
          style={{ 
            width: 500,
            height: 500,
          }}
          src = {this.state.image[this.state.idx]} />
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
           onClick={this.next}>{'>'}</button>
        </div>

      );
    }
  }

function Robot() {
        return (
        <main className="flex-grow">
            <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-14">
                    <h2 className="h2 mb-4">Our Robot</h2>
                    <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                    <p className="mb-3">The design and execution of our robot </p> 
                    <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </p>
                </div>
                {/* 2020 Robot */}
                <ImageSlider />
                {/* Items */}
                <div className="max-w-sm md:max-w-4xl mx-auto grid">
                    <p className="text-gray-800">
                    {/* <h4 className="h4 mb-3">Header</h4> */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing

                    </p>{" "}
                    <br />
                    <p className="text-gray-800">
                    {/* <h4 className="h4 mb-3">Header</h4> */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing

                    </p>{" "}
                    <br />
                    <p className="text-gray-800">
                    {/* <h4 className="h4 mb-3">Header</h4> */}
                    
                    </p>
                </div>
                </div>
            </div>
            </section>
        </main>
        );
  }
  

export default Robot;
    