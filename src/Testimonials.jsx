import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from './assets/b1.jpeg';
import b2 from './assets/b2.jpeg';
import b3 from './assets/b3.jpeg';
import g1 from './assets/g1.jpeg';
import g2 from './assets/g2.jpeg';
import g3 from './assets/g3.jpeg';

const testimonials = [
  {
    name: "Alice Johnson",
    review: "Amazing service! The stylists are professionals and know exactly what suits you best.",
    image: g1,
  },
  {
    name: "Mark Benson",
    review: "Best hair salon in town! Highly recommend their beard styling services.",
    image: b1,
  },
  {
    name: "Sophia Williams",
    review: "Loved the ambiance and their customer service. Will definitely visit again!",
    image: g2,
  },
  {
    name: "Daniel Roberts",
    review: "A perfect place for a haircut. The experience was fantastic!",
    image: b2,
  },
  {
    name: "Emma Brown",
    review: "Their hair coloring services are top-notch. So happy with my new look!",
    image: g3,
  },
  {
    name: "Chris Evans",
    review: "Great place, friendly staff, and professional service. 10/10!",
    image: b3,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white text-black py-12 relative">

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="fill-gray-100">
          <path d="M0,60 C300,10 900,10 1200,60 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-200 p-6 border border-gray-300 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-300">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <p className="italic text-black">"{testimonial.review}"</p>
                <h3 className="text-lg font-semibold mt-3">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>


      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="fill-gray-200">
          <path d="M0,0 C300,50 900,50 1200,0 L1200,60 L0,60 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
