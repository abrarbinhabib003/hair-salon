import React from "react";
import beardImg from './assets/beard.jpeg';
import hairstyleImg from './assets/hairstyle.jpeg';
import haircareImg from './assets/haircare.jpeg';

const LatestBlogs = () => {
  const blogs = [
    {
      title: "How to Style Your Hair Like a Pro",
      description: "Learn the latest hair styling tips and tricks from the experts to get the perfect look every time.",
      image: hairstyleImg,
      link: "/blog/1",
    },
    {
      title: "The Best Hair Care Products for Healthy Hair",
      description: "Discover the must-have hair care products that will keep your hair healthy, shiny, and strong.",
      image: haircareImg,
      link: "/blog/2",
    },
    {
      title: "Top 5 Beard Grooming Tips Every Man Should Know",
      description: "A guide to keeping your beard in top shape with expert grooming tips.",
      image: beardImg,
      link: "/blog/3",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white border border-2 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">{blog.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-blue-500 mt-4 inline-block font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

      
        <div className="mt-8">
          <a
            href="/blogs"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Read All Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
