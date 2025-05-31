import React from 'react';
import haircutImg from './assets/haircut.jpeg';
import coloringImg from './assets/color.jpeg';
import shampooImg from './assets/shampoo.jpeg';
import blowoutImg from './assets/shampoo2.jpeg';
import treatmentImg from './assets/beard-barber-shop-salon_1303-20931.avif';
import facialImg from './assets/skin.jpeg';
import shavingImg from './assets/shave.jpeg';

const Services = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-black">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     
          <div className="card w-full bg-gray-100 shadow-2xl border-2 hover:shadow-4xl transition-shadow duration-300">
            <figure className="px-8 pt-8">
              <img
                src={haircutImg}
                alt="Haircuts and Trims"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-left p-6">
              <h3 className="text-2xl font-semibold text-black">Haircuts and Trims</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Professional haircuts for men, women, and children</li>
                <li>Regular trims to maintain healthy hair</li>
              </ul>
              <div className="card-actions mt-4">
                <button className="btn bg-blue-700 text-white hover:bg-blue-900 w-full">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card w-full bg-gray-100 shadow-2xl border-2 hover:shadow-4xl transition-shadow duration-300">
            <figure className="px-8 pt-8">
              <img
                src={coloringImg}
                alt="Hair Coloring"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-left p-6">
              <h3 className="text-2xl font-semibold text-black">Hair Coloring</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Highlights and lowlights</li>
                <li>Full color, balayage, ombre</li>
                <li>Color touch-ups</li>
              </ul>
              <div className="card-actions mt-4">
                <button className="btn bg-blue-700 text-white hover:bg-blue-900 w-full">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card w-full bg-gray-100 shadow-2xl border-2 hover:shadow-4xl transition-shadow duration-300">
            <figure className="px-8 pt-8">
              <img
                src={shampooImg}
                alt="Shampoo and Conditioning"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-left p-6">
              <h3 className="text-2xl font-semibold text-black">Shampoo and Conditioning</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Relaxing shampoo and deep conditioning</li>
                <li>Nourishing and strengthening treatments</li>
              </ul>
              <div className="card-actions mt-4">
                <button className="btn bg-blue-700 text-white hover:bg-blue-900 w-full">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card w-full bg-gray-100 shadow-2xl border-2 hover:shadow-4xl transition-shadow duration-300">
            <figure className="px-8 pt-8">
              <img
                src={blowoutImg}
                alt="Blowouts and Styling"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-left p-6">
              <h3 className="text-2xl font-semibold text-black">Blowouts and Styling</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Professional blowouts and hairstyling services</li>
                <li>Curls, straightening, and updos</li>
              </ul>
              <div className="card-actions mt-4">
                <button className="btn bg-blue-700 text-white hover:bg-blue-900 w-full">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card w-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-8 pt-8">
              <img
                src={treatmentImg}
                alt="Hair Treatments"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-left p-6">
              <h3 className="text-2xl font-semibold text-black">Hair Treatments</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Deep conditioning and keratin treatments</li>
                <li>Scalp treatments to improve hair health</li>
              </ul>
              <div className="card-actions mt-4">
                <button className="btn bg-blue-700 text-white hover:bg-blue-900 w-full">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card w-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-8 pt-8">
              <img
                src={facialImg}
                alt="Facials"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-left p-6">
              <h3 className="text-2xl font-semibold text-black">Facials</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Skincare treatments including cleansing and exfoliation</li>
                <li>Moisturizing and glowing complexion</li>
              </ul>
              <div className="card-actions mt-4">
                <button className="btn bg-blue-700 text-white hover:bg-blue-900 w-full">Book Now</button>
              </div>
            </div>
          </div>

          <div className="card w-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-8 pt-8">
              <img
                src={shavingImg}
                alt="Shaving"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-left p-6">
              <h3 className="text-2xl font-semibold text-black">Shaving</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Traditional straight razor shaves for a smooth finish</li>
                <li>Beard and mustache grooming services</li>
              </ul>
              <div className="card-actions mt-4">
                <button className="btn bg-blue-700 text-white hover:bg-blue-900 w-full">Book Now</button>
              </div>
            </div>
          </div>
        </div> 
      </div> 
    </section>
  );
};

export default Services;
