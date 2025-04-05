import React from "react";

const TeamMembers = () => {
  const team = [
    {
      name: "John Doe",
      speciality: "Hair Stylist",
      experience: "10+ Years",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      speciality: "Color Expert",
      experience: "8 Years",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mike Johnson",
      speciality: "Beard Specialist",
      experience: "5 Years",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Emily Brown",
      speciality: "Makeup Artist",
      experience: "7 Years",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="relative bg-white text-black py-16">

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-gray-900"
        >
          <path
            d="M0,120 C300,30 900,30 1200,120 L1200,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-400 shadow-lg hover:shadow-2xl transition duration-300 p-6 rounded-lg text-center transform hover:scale-105"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.speciality}</p>
              <p className="text-gray-500 text-sm">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-gray-600"
        >
          <path
            d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default TeamMembers;
