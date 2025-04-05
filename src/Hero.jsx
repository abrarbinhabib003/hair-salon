import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-gray-200 text-black">
      <div className="max-w-2xl px-6">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Elevate Your Style with Confidence ✂️
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Professional hairstyling services tailored just for you.
        </p>

        <Link 
          to="/appointments"
          className="btn btn-secondary px-6 py-3 text-lg rounded-lg transition duration-300 hover:scale-105"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
};

export default Hero;
