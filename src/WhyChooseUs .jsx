import React from "react";
import { FaStar, FaClock, FaUserTie, FaLeaf, FaHandHoldingHeart, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    { icon: <FaStar />, title: "Experienced Professionals", desc: "Highly skilled stylists with years of expertise." },
    { icon: <FaClock />, title: "Time Efficient", desc: "Quick and quality services for your convenience." },
    { icon: <FaUserTie />, title: "Personalized Styling", desc: "Tailored haircuts & treatments to suit you." },
    { icon: <FaLeaf />, title: "Eco-Friendly Products", desc: "Using organic & chemical-free products." },
    { icon: <FaHandHoldingHeart />, title: "Customer Satisfaction", desc: "Your happiness is our priority." },
    { icon: <FaShieldAlt />, title: "Hygienic & Safe", desc: "Maintaining the highest hygiene standards." },
  ];

  return (
    <section className="relative bg-white text-black py-16">

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-gray-200">
          <path d="M0,120 C300,30 900,30 1200,120 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-400 shadow-lg hover:shadow-2xl transition duration-300 p-6 rounded-lg text-center transform hover:scale-105 flex flex-col items-center"
            >
              <div className="text-4xl text-black mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="text-gray-600 mt-2">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-gray-200">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUs;
